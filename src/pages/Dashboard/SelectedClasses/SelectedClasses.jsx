import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { FaTrashAlt } from 'react-icons/Fa';
import axios from "axios";

const SelectedClasses = () => {
    const [selectedClasses, refetch] = useSelectedClasses();

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/studentClasses/${id}`)
                    .then(res => {
                        const data = res.data;
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="pt-20 pb-36 text-center w-10/12">
            <SectionTitle heading="My" specialWord="Selected Classes"></SectionTitle>
            <div className="bg-[#9CD1CD] pt-14 text-stone-900 text-center">
                <h1 className="text-start pl-8 text-2xl pb-8">Total Selected Classes: {selectedClasses.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <tbody className="px-12 overflow-hidden hover:overflow-auto">
                            {
                                selectedClasses.map((selectedClass, index) => <tr key={selectedClass._id} className="border-t-4 border-white">
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
                                    <td><button onClick={() => handleDelete(selectedClass._id)} className="btn bg-[#CB4154] border-none ml-10"><FaTrashAlt className="text-white h-12 w-4"></FaTrashAlt></button></td>
                                    <td>
                                        <button className="btn text-white text-base font-semibold border-none bg-[#bd9e20] ml-10 mr-6">Pay</button>
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