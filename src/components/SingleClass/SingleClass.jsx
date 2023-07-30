import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SingleClass.css'
import Swal from 'sweetalert2';
import useAdmin from '../../hooks/useAdmin';
import useVerifyInstructor from '../../hooks/useVerifyInstructor';



const SingleClass = ({ singlesClass }) => {
    const { _id, name, image, price, seats, email, instructorName, approvedId, students } = singlesClass;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useVerifyInstructor();
    const cardBackground = seats === 0 ? 'bg-red-500' : ''
    const handleSelectedClass = () => {
        if (user && user?.email) {
            const selectedClass = { classId: _id, name, image, price, seats, email, instructorName, userEmail: user?.email, approvedId, students }
            fetch('http://localhost:5000/studentClasses', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your class has been selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'You have to login first',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/login', { state: { from: location } });
        }

    }

    return (
        <div className={`card ${cardBackground} h-auto bg-base-100 rounded-sm shadow-xl border border-stone-300 card-content`}>
            <div className='h-[310px]'>
                <img className='h-full w-full' src={image} alt="Shoes" />
            </div>
            <div className="px-8 pb-8 space-y-7 text-black">
                <h2 className="text-2xl lg:text-3xl h-20 overflow-hidden hover:overflow-y-auto font-bold text-start hover:text-[#e7ae34]">{name}</h2>
                <div className="flex justify-between">
                    <p className="text-lg lg:text-xl">Available Seats: <span className="text-[#e7ae34] font-semibold">{seats}</span></p>
                    <p className="bg-[#CB4154] px-4 py-1 text-white rounded-full font-semibold text-lg">${price}</p>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between space-y-3">
                    <div className="text-start border-l-4 pl-4 border-red-600">
                        <h5 className="text-lg lg:text-xl font-semibold">{instructorName}</h5>
                        <p className="font-bold text-sm lg:text-base text-[#e7ae34]">{email}</p>
                    </div>
                    {seats === 0 || isAdmin || isInstructor ?
                        <button disabled className="btn text-base font-semibold text-white">Select</button>
                        :                       
                        <button onClick={handleSelectedClass} className="btn bg-[#e7ae34] text-sm lg:text-base font-semibold text-white">Select</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleClass;