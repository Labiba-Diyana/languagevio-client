import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";


const PaymentHistory = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`)
            return res.data;
        }
    })
    console.log(payments)
    return (
        <div className="pt-20 pb-36 text-center mx-auto w-10/12">
            <SectionTitle heading="My Successful" specialWord="Payments"></SectionTitle>
            <div className="bg-stone-50 p-10 rounded shadow-xl">
                <h3 className="text-2xl text-start pl-7 font-medium pb-5">Total Payments: {payments.length}</h3>
                <div className="overflow-x-auto rounded-t-lg ">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-[#c98d0c] bg-opacity-70">
                            <tr className="text-xl">
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Email</th>
                                <th>Total Price</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                payments.map((payment, index) => <tr key={payment._id} className="font-semibold text-lg">
                                    <th>{index + 1}</th>
                                    <td className="text-xl">{payment.name}</td>
                                    <td>{payment.userEmail}</td>
                                    <td className="pl-12">${payment.price}</td>
                                    <td>{payment.date}</td>
                                    
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;