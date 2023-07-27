import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import { FaUserShield } from 'react-icons/Fa';
import { FaUserTie } from 'react-icons/Fa';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleMakeAdmin = (id, name, email, image) => {
        const oldInstructor = {name, email, image, category: 'normal'};
        axios.patch(`http://localhost:5000/users/admin/${id}`, oldInstructor)
            .then(res => {
                console.log(res.data)
                if (res.data?.modifiedCount > 0 || res.data?.result?.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = (id, name, email, image) => {
        const newInstructor = {name, email, image, category: 'normal'};
        axios.patch(`http://localhost:5000/users/instructor/${id}`, newInstructor)
            .then(res => {
                console.log(res.data)
                if (res.data.result.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${name} is an instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="pt-20 pb-36 text-center  w-9/12">
            <SectionTitle heading="Manage" specialWord="Users"></SectionTitle>
            <div className="bg-stone-50 p-10 rounded">
                <h3 className="text-2xl text-start pl-7 font-medium pb-5">All Users: {users.length}</h3>
                <div className="overflow-x-auto rounded-t-lg ">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-[#00AFA7] bg-opacity-70">
                            <tr className="text-xl">
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Instructor</th>
                                <th>Admin</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                users.map((user, index) => <tr key={user._id} className="text-base font-semibold">
                                    <th>{index + 1}</th>
                                    <td className="text-lg">{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="pl-8">{
                                        user.role === 'instructor' ? <p disabled className="font-semibold text-blue-800">Instructor</p> :
                                            <button onClick={() => handleMakeInstructor(user._id, user.name, user.email, user.image)} className="btn bg-[#CB4154]"><FaUserTie className="text-white w-4 h-10"></FaUserTie></button>
                                    }</td>
                                    <td className="pl-6">
                                        {
                                            user.role === 'admin' ? <p disabled className="text-[#c54d5d] font-semibold">Admin</p> :
                                                <button onClick={() => handleMakeAdmin(user._id, user.name, user.email, user.image)} className="btn bg-[#e7ae34]"><FaUserShield className="text-white w-5 h-11"></FaUserShield></button>
                                        }
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
