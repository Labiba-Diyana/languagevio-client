import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const MyClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery({
        queryKey: ['newClasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/newClasses/instructor?email=${user?.email}`)
            return res.data;
        }
    })
    console.log(classes)

    return (
        <div className="pt-20 pb-36 text-center mx-auto w-11/12">
            <SectionTitle heading="My" specialWord="Classes"></SectionTitle>
            <h1 className="text-start text-blue-900 font-medium pl-8 text-2xl pb-5">Total Classes: {classes.length}</h1>
            <div className="bg-[#9CD1CD] pt-14 text-stone-900 text-center">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-xl">
                                <th className="pl-7">#</th>
                                <th>Classes Info</th>
                                <th>Instructor Info</th>
                                <th>Status</th>
                                <th className="flex-col">
                                    <span>Enrolled Students <br /> (in Total)</span>
                                    <span></span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="px-12 overflow-hidden hover:overflow-auto">
                            {
                                classes.map((singleClass, index) => <tr key={singleClass._id} className="border-t-4 border-white">
                                    <th className="pl-7 text-lg">{index + 1}</th>
                                    <td>
                                        <div className="flex space-x-3 items-center">
                                            <div className="avatar">
                                                <div className="w-36 rounded-xl">
                                                    <img src={singleClass.image} />
                                                </div>
                                            </div>
                                            <div className="w-72">
                                                <div className="font-bold text-2xl">{singleClass.name}</div>
                                                <div className="text-lg opacity-80">
                                                    <p>Available seats: {singleClass.seats}</p>
                                                    <p>Price: ${singleClass.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="flex-col space-y-3 items-center pr-14">
                                        <p className="text-xl font-bold">{singleClass.instructorName}</p>
                                        <p className="text-base opacity-80">{singleClass.email}</p>

                                    </td>
                                    <td className="text-lg font-semibold pr-10">
                                        {singleClass?.status}
                                    </td>
                                    <td className="text-lg font-bold pr-12 pl-16">
                                        {singleClass.students}
                                    </td>
                                    <td className="pr-16">
                                        <button>FeedBack</button>
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

export default MyClasses;