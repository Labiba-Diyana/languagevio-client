

const Instructor = ({ instructor }) => {
    const { image, name, email } = instructor
    return (
        <div className="card bg-base-100 rounded-none shadow-xl border-2 border-stone-300 border-t-[#FCD12A]">
            <div className="py-12">
                <div className="avatar">
                    <div className="w-48 mx-auto mask mask-hexagon">
                        <img src={image} alt="Shoes" className="" />
                    </div>
                </div>
                <div className="card-body items-center space-y-2 text-black text-center">
                    <h2 className="text-xl lg:text-2xl font-semibold">{name}</h2>
                    <p className="text-base">Email : <span className="font-bold text-stone-500">{email}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Instructor;