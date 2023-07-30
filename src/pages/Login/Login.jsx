import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import bg from '../../assets/background-img/bg-2.png'
import img from '../../assets/image/login.png'


const Login = () => {
    const [show, setShow] = useState(false);
    const {loginUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const {register, handleSubmit, reset, formState: { errors }} = useForm();

    const onSubmit = data => {
        console.log(data);
        loginUser(data.email, data.password)
        .then(result => {
            reset();
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
    }

    return (
        <div className="pt-32">
            <div style={{backgroundImage: `url(${bg})`}} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                <img src={img} alt="" />
                    <div className="card p-5 flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <h3 className="text-center text-3xl font-bold mb-[-10px] mt-6">Login</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "text" : "password"} name="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">Password is required</span>}
                                <p className="text-end" onClick={() => setShow(!show)}>
                                    {
                                        show ? <FaEyeSlash className="w-10 mt-3"></FaEyeSlash> : <FaEye className="w-10 mt-3"></FaEye>
                                    }
                                </p>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#00AFA7] text-lg text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="px-10 mt-[-20px] text-[#00AFA7] text-base font-semibold"><Link to="/registration">New here? Create a new account</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;