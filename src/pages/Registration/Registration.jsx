import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import bg from '../../assets/background-img/bg-2.png'
import img from '../../assets/image/register.png'


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
                                axios.post('https://languagevio-server-labiba-diyana.vercel.app/users', saveUser)
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
            <div style={{backgroundImage: `url(${bg})`}} className="hero min-h-screen bg-stone-100">
                <div className="hero-content lg:flex justify-between">
                    <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-xl p-5 shadow-2xl bg-white my-44">
                    <h3 className="text-center text-3xl font-bold mb-[-10px] mt-6">Register Your Account</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
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
                                })}  placeholder="Password" className="input input-bordered" />
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
                                <input type="password" name="confirm" {...register("confirm", { required: true })} placeholder="Confirm Password" className="input input-bordered" />
                                {errors.confirm && <span className="text-red-600">Please confirm your password</span>}{error && <span className="text-amber-500">{error}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#00AFA7] text-lg text-white" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className="px-10 mt-[-18px] text-[#00AFA7] text-base font-semibold"><Link to="/login">Already have an account? Go to Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;