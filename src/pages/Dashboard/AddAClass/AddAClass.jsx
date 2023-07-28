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
                axiosSecure.post('/newClasses/instructor', newClass)
                .then(res => {
                    const data= res.data;
                    if(data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your class has been added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })


    };

    return (
        <div className="pt-20 pb-36 text-center mx-auto w-9/12 ">
            <SectionTitle heading="Add Your" specialWord="Class"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-neutral-100 bg-opacity-20 shadow-2xl rounded-xl p-12 space-y-6">
                {/* first row */}
                <div className="flex space-x-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register("name", { required: true })} placeholder="class name" className="input input-bordered w-full" />
                        </label>
                        {errors.name && <span className="text-red-600 text-start">Class name is required</span>}
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
                        {errors.image && <span className="text-red-600 text-start">Class image is required</span>}
                    </div>
                </div>
                {/* second row */}
                <div className="flex space-x-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" readOnly defaultValue={user?.displayName} {...register("instructorName")} placeholder="instructor name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" readOnly defaultValue={user?.email} {...register("email")}  placeholder="instructor email" className="input input-bordered w-full" />
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
                        </label>
                        {errors.seats && <span className="text-red-600 text-start">Available seats is required</span>}
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" {...register("price", { required: true })}  placeholder="price" className="input input-bordered w-full" />
                        </label>
                        {errors.price && <span className="text-red-600 text-start">Price is required</span>}
                    </div>
                </div>
                <input type="submit" value="Add your class" className="btn btn-block bg-[#9CD1CD]" />
            </form>
        </div>
    );
};

export default AddAClass;