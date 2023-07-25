import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SingleClass.css'

const SingleClass = ({ singlesClass }) => {
    const { _id, name, image, price, seats, email, instructorName } = singlesClass;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const cardBackground = seats === 12 ? 'bg-red-600' : ''

    const handleSelectedClass = () => {
        if (user && user.email) {
            const selectedClass = { classId: _id, name, image, price, seats, email, instructorName, usrEmail: user?.email }
            fetch('http://localhost:5000/studentClasses', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
        else {
            navigate('/login', {state: {from: location}});
        }

    }

    return (
        <div className={`card ${cardBackground} h-auto bg-base-100 rounded-sm shadow-xl border border-stone-300`}>
            <div><img src={image} alt="Shoes" /></div>
            <div className="p-8 space-y-7 text-black card-content">
                <h2 className="text-3xl h-20 overflow-hidden hover:overflow-y-auto font-bold text-start hover:text-[#e7ae34]">{name}</h2>
                <div className="flex justify-between">
                    <p className="text-xl">Available Seats: <span className="text-[#e7ae34] font-semibold">{seats}</span></p>
                    <p className="bg-[#CB4154] px-4 py-1 text-white rounded-full font-semibold text-lg">${price}</p>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between space-y-3">
                    <div className="text-start border-l-4 pl-4 border-red-600">
                        <h5 className="text-xl font-semibold">{instructorName}</h5>
                        <p className="font-bold text-[#e7ae34]">{email}</p>
                    </div>
                    {seats === 12 || seats === 40 || seats === 80 ? <button disabled className="btn text-base font-semibold text-white">Select</button> :
                        <button onClick={handleSelectedClass} className="btn bg-[#e7ae34] text-base font-semibold text-white">Select</button>}
                </div>
            </div>
        </div>
    );
};

export default SingleClass;