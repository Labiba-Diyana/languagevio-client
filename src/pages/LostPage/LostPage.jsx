import { FaArrowCircleLeft } from 'react-icons/fa';
import img from '../../assets/image/lost.gif'
import { Link } from 'react-router-dom';

const LostPage = () => {
    return (
        <div className='relative'>
            <img className='w-screen h-screen' src={img} alt="" />
            <Link to="/">
                <button className="btn bg-stone-800 absolute inset-x-0 bottom-0 h-20 mx-[800px] normal-case mb-12 text-3xl text-blue-400">
                    <FaArrowCircleLeft className='mr-4'></FaArrowCircleLeft> Back to Home</button>
            </Link>
        </div>
    );
};

export default LostPage;