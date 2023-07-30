import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);

    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            
            // get and set token
            if(currentUser){
                axios.post('https://languagevio-server-labiba-diyana.vercel.app/jwt', {email: currentUser.email})
            .then(data => {
                console.log(data.data)
                localStorage.setItem('access-token', data.data.token);
                setLoading(false);
            })
            }
            else{
                localStorage.removeItem('access-token');
            }
        })
        return () => {
            return unsubscribe();
        }
     }, []) 
   

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUserProfile,
        googleLogin
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;