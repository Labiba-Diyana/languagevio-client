import SectionTitle from "../../../../components/SectionTitle";
import useSelectedClasses from "../../../../hooks/useSelectedClasses";



const SelectedClasses = () => {
    const [selectedClasses] = useSelectedClasses();
    return (
        <div className="pt-20 pb-36 text-center w-10/12">
            {/* <div className="text-4xl font-bold">My Selected Classes</div> */}
            <SectionTitle heading="My" specialWord="Selected Classes"></SectionTitle>
            <div className="bg-[#9CD1CD] pt-14 text-stone-900 text-center">
                <h1 className="text-start pl-8 text-2xl pb-8">Total Selected Classes: {selectedClasses.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <tbody className="px-12 overflow-hidden hover:overflow-auto">
                            {
                                selectedClasses.map((selectedClass, index) => <tr key={selectedClass._id} className="border-y-2 border-white">
                                    <th className="pl-6 text-lg">{index + 1}</th>
                                    <td>
                                        <div className="flex space-x-3 items-center">
                                            <div className="avatar">
                                                <div className="w-36 rounded-xl">
                                                    <img src={selectedClass.image} />
                                                </div>
                                            </div>
                                            <div className="w-72">
                                                <div className="font-bold text-2xl">{selectedClass.name}</div>
                                                <div className="text-lg opacity-80">
                                                    <p>Available seats: {selectedClass.seats}</p>
                                                    <p>Price: ${selectedClass.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="flex-col space-y-3 items-center">
                                        
                                            <p className="text-xl font-bold">{selectedClass.instructorName}</p>
                                            <p className="text-base opacity-80">{selectedClass.email}</p>
                                    
                                    </td>
                                    <td><button className="btn btn-sm bg-red-600 ml-10">Delete</button></td>
                                    <td>
                                        <button className="btn btn-ghost ml-10 btn-xs mr-6">Pay</button>
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

export default SelectedClasses;