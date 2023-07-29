import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle";

const EnrolledClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrolledClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolledClasses?email=${user?.email}`)
            return res.data;
        }
    })
    console.log(enrolledClasses);

    return (
        <div className="pt-20 pb-36 text-center mx-auto w-8/12">
            <SectionTitle heading="My Enrolled" specialWord="Classes"></SectionTitle>
            <div className="bg-stone-50 p-10 rounded shadow-xl">
                <h3 className="text-2xl text-start pl-7 font-medium pb-5">Total Classes: {enrolledClasses.length}</h3>
                <div className="overflow-x-auto rounded-t-lg ">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-[#00AFA7] bg-opacity-70">
                            <tr className="text-xl">
                                <th className="pl-8">#</th>
                                <th>Classes Name</th>
                                <th>Instructor Info</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                enrolledClasses.map((enrolledClass, index) => <tr key={enrolledClass._id} className="text-base font-semibold">
                                    <th className="pl-8 text-lg">{index + 1}</th>
                                    <td className="flex space-x-5 items-center">
                                        <div className="avatar">
                                            <div className="w-40 rounded-xl">
                                                <img src={enrolledClass.image} />
                                            </div>
                                        </div>
                                        <h1 className="text-2xl font-semibold w-64">{enrolledClass.name}</h1>
                                    </td>
                                    <td className="flex-col space-y-3 items-baseline pr-14"><h4 className="text-xl font-semibold">{enrolledClass.instructorName}</h4>
                                        <p className="font-semibold text-blue-700">{enrolledClass.email}</p>
                                        <p className="text-stone-500">Time: (12.00pm-2.00pm)</p>
                                    </td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

};

export default EnrolledClasses;