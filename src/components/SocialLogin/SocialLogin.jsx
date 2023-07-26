import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = ({ title }) => {
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
                axios.post('http://localhost:5000/users', saveUser)
                    .then(res => {
                        console.log(res.data)
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="divider"></div>
            <button onClick={handleGoogleLogin} className="btn btn-outline">{title}</button>
        </div>
    );
};

export default SocialLogin;