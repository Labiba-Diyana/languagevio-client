import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const ManageClasses = () => {
    const { loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/newClasses')
            return res.data;
        }
    });

    const handleApproved = (id, image, name, instructorName, seats, price, students, email) => {
        const approvedClass = { image, name, instructorName, seats, price, students, email }

        axios.patch(`http://localhost:5000/newClasses/approved/${id}`, approvedClass)
            .then(res => {
                if (res.data.result.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'This class has been approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeny = id => {
        axios.patch(`http://localhost:5000/newClasses/denied/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'This class has been denied',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="pt-20 pb-36 text-center p-[65px]">
            <SectionTitle heading="Manage" specialWord="All The Classes"></SectionTitle>
            <h1 className="text-start pl-8 text-2xl font-semibold underline underline-offset-8 pb-8">Total Classes: {classes.length}</h1>
            <div className="grid grid-cols-2 gap-x-5">
                {
                    classes.map(singleClass => <div key={singleClass._id} className="card card-side bg-neutral-100 shadow-2xl p-5 mb-8 space-x-5  justify-between items-center">
                        <div className="flex space-x-6">
                            <div className="avatar w-1/2">
                                <div className="w-full rounded-xl">
                                    <img src={singleClass.image} />
                                    {
                                         singleClass?.status === 'pending' &&
                                         <p className="absolute w-32 py-2 font-semibold rounded-xl left-0 bg-amber-500 text-white top-0 text-xl">{singleClass.status}</p>
                                    }                                   
                                    {
                                         singleClass?.status === 'approved' &&
                                         <p className="absolute w-32 py-2 font-semibold rounded-xl left-0 bg-emerald-600 text-white top-0 text-xl">{singleClass.status}</p>
                                    }                                   
                                    {
                                         singleClass?.status === 'denied' &&
                                         <p className="absolute w-32 py-2 font-semibold rounded-xl left-0 bg-[#CB4154] text-white top-0 text-xl">{singleClass.status}</p>
                                    }                                   
                                </div>
                            </div>
                            <div className="text-start space-y-2">
                                <h2 className="text-2xl font-semibold">{singleClass.name}</h2>
                                <div className="text-lg space-y-2">
                                    <p>Available seats: <span className="text-xl font-semibold text-blue-600 ml-1">{singleClass.seats}</span></p>
                                    <p>Price: <span className="bg-[#CB4154] px-3 py-1 text-white rounded-full ml-1 font-semibold text-base">${singleClass.price}</span></p>
                                </div>
                                <div className="divider pt-5"></div>
                                <div className="">
                                    <h4 className="text-xl font-semibold">{singleClass.instructorName}</h4>
                                    <p>Email: <span className="font-semibold text-stone-500">{singleClass.email}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-40 justify-end space-y-5">
                            {
                                singleClass?.status === 'approved' || singleClass?.status === 'denied' ? <>
                                    <button disabled className="btn w-28 text-base">Approved</button>
                                    <button disabled className="btn w-28 text-base">Deny</button>
                                    <Link to={`/dashboard/feedBack/${singleClass._id}`}><button className="btn bg-sky-700 border-none text-stone-200 w-28 text-base">Feedback</button></Link>
                                </> :
                                    <>
                                        <button onClick={() => handleApproved(singleClass._id, singleClass.image,
                                            singleClass.name, singleClass.instructorName, singleClass.seats, singleClass.price, singleClass.students, singleClass.email)} className="btn bg-emerald-700 border-none text-stone-200 w-28 text-base">Approve</button>
                                        <button onClick={() => handleDeny(singleClass._id)} className="btn bg-red-800 border-none text-stone-200 w-28 text-base">Deny</button>
                                        <button disabled className="btn w-28 text-base">Feedback</button>
                                    </>
                            }
                            
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;