import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const {id} = useParams();
    const [axiosSecure] = useAxiosSecure();
    const {loading} = useAuth();
    const { data: classes = [], isLoading, isError } = useQuery({
        queryKey: ['singleClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/studentClasses/${id}`)
            return res.data;
        }
    })   
    
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !classes || classes.length === 0) {
        return <div>Class not found or has been deleted.</div>;
    }

     
    return (
        <div className="pt-32 pb-36 text-center mx-auto w-8/12">
            <h3 className="text-4xl font-bold mb-20"><span className="text-[#CB4154]">Payment,</span> kindly process.</h3>
            <div >
                <Elements stripe={stripePromise}>
                   {
                    classes.map(singleClass => <CheckOutFrom
                    key={singleClass._id}
                    price={singleClass.price}
                    singleClass={singleClass}></CheckOutFrom>)
                   }
                </Elements>
            </div>
        </div>
    );
};

export default Payment;