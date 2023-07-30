import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';


const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                const saveUser = { name: user.displayName, email: user.email, image: user.photoURL }
                axios.post('https://languagevio-server-labiba-diyana.vercel.app/users', saveUser)
                    .then(res => {
                        console.log(res.data)
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="w-full text-center mt-5 ">
            <div className="divider px-8"></div>
            <button onClick={handleGoogleLogin} className="btn btn-circle mt-2 mb-4 btn-outline text-[#00AFA7] font-bold">
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;