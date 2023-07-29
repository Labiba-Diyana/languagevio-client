import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const CheckOutFrom = ({ price, singleClass }) => {
    const {approvedId, classId, image, name, email, instructorName} = singleClass
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [price, axiosSecure])



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error);
            setCardError(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
            setCardError('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
            const payment = {
                userEmail: user?.email,
                transactionId: paymentIntent.id,
                selectedId : singleClass._id,
                classId,
                approvedId,
                name,
                image,
                date: new Date(),
                instructorName,
                email,
                price,
                seats : singleClass.seats - 1,
                students: singleClass.students + 1,                
            }

            axiosSecure.post('/payments', payment)
            .then(res => {
                if(res.data.result.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your payment been successful',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }

    }

    return (
        <>
            <form className="w-3/4 mx-auto bg-slate-50 p-20 rounded-lg shadow-2xl" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-active btn-primary mt-20  w-24 text-base" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 text-lg mt-10">{cardError}</p>}
            {transactionId && <p className="text-emerald-600 text-lg mt-10">Transaction complete successfully</p>}
        </>
    );
};

export default CheckOutFrom;