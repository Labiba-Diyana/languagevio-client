import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddAClass = () => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                const imgURL = imgData.data.display_url;
                const {name, instructorName, price, seats, email} = data;
                const newClass = {name, instructorName, email, image: imgURL, price: parseFloat(price), seats: parseFloat(seats), students: 0, status: 'pending', userEmail: user?.email}
                console.log(newClass);
                axiosSecure.post('/newClasses', newClass)
                .then(res => {
                    const data= res.data;
                    if(data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'center-center',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })


    };

    return (
        <div className="pt-20 pb-36 text-center mx-auto w-9/12">
            <SectionTitle heading="Add your" specialWord="Class"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                {/* first row */}
                <div className="flex space-x-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register("name", { required: true })} placeholder="class name..." className="input input-bordered w-full" />
                            {errors.password && <span className="text-red-600">Class name is required</span>}
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
                        {errors.password && <span className="text-red-600">Class image is required</span>}
                    </div>
                </div>
                {/* second row */}
                <div className="flex space-x-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register("instructorName", { required: true })} placeholder="instructor name" className="input input-bordered w-full" />
                            {errors.password && <span className="text-red-600">Instructor name is required</span>}
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" {...register("email", { required: true })}  placeholder="instructor email" className="input input-bordered w-full" />
                            {errors.password && <span className="text-red-600">Instructor Email is required</span>}
                        </label>
                    </div>
                </div>
                {/* third row */}
                <div className="flex space-x-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <label className="input-group">
                            <input type="number" {...register("seats", { required: true })}  placeholder="available seats" className="input input-bordered w-full" />
                            {errors.password && <span className="text-red-600">Available seats is required</span>}
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" {...register("price", { required: true })}  placeholder="price" className="input input-bordered w-full" />
                            {errors.password && <span className="text-red-600">Price is required</span>}
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add your class" className="btn btn-block bg-blue-200" />
            </form>
        </div>
    );
};

export default AddAClass;