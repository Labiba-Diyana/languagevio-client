import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


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
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
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
                                <p onClick={() => setShow(!show)}>
                                    {
                                        show ? <span>Hide</span> : <span>Show</span>
                                    }
                                </p>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p><small><Link to="/registration">New here? Create a new account</Link></small></p>
                        <SocialLogin title="Sing in with google"></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;