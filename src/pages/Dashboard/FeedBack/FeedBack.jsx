import { useParams } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const FeedBack = () => {
    const { id } = useParams();
    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {
        const sendFeedback = {feedback: data.feedback}
        axiosSecure.patch(`/newClasses/feedback/${id}`, sendFeedback)
        .then(res => {
            if(res.data.modifiedCount){
                reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your feedback has been send',
                            showConfirmButton: false,
                            timer: 1500
                          })
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="pt-20 text-center w-7/12 mx-auto">
            <SectionTitle heading="Give Your" specialWord="Feedback"></SectionTitle>
            <textarea placeholder="Write your feedback here....." {...register("feedback", { required: true })} className="textarea h-80 bg-[#c8dedb] textarea-bordered textarea-lg w-full" ></textarea>
            {errors.feedback && <span className="text-red-600">Write Something</span>}
            <div className="text-end mt-2">
            <button className="btn bg-[#e7ae34] w-24 text-base">Send</button>
            </div>
        </form>
    );
};

export default FeedBack;