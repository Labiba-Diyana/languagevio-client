import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";


const Registration = () => {
    const { createUser, updateUserProfile, logOut } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors }, trigger } = useForm();
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        const isFormValid = await trigger();
        if (isFormValid) {
            if (data.password !== data.confirm) {
                setError("Your password did not match!!");
            } else {
                setError(null);
                createUser(data.email, data.password)
                    .then(result => {
                        const user = result.user;
                        console.log(user);
                        updateUserProfile(data.name, data.photo)
                            .then(() => {
                                const saveUser = { name: data.name, email: data.email, image: data.photo }
                                axios.post('http://localhost:5000/users', saveUser)
                                .then(res => {
                                    console.log(res.data)
                                    if(res.data.insertedId){
                                        reset()
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'User Registered Successfully',
                                            showConfirmButton: false,
                                            timer: 1500
                                          })
                                    }
                                })
                            })
                    })
                logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
            }
        }
    };

    return (
        <div className="pt-32">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">singup now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must have at least 6 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must have a capital letter and a special character</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirm" {...register("confirm", { required: true })} placeholder="password" className="input input-bordered" />
                                {errors.confirm && <span className="text-red-600">Please confirm your password</span>}{error && <span className="text-amber-500">{error}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" {...register("photo", { required: true })} placeholder="password" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p><small><Link to="/login">Already have an account? Go to Login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;