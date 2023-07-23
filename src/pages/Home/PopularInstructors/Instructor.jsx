

const Instructor = ({ one }) => {
    const { image, name, email } = one
    return (
        <div className="card w-80 bg-base-100 rounded-none shadow-xl border-2 border-stone-300 border-t-[#FCD12A]">
            <div className="pt-12">
                <div className="avatar">
                    <div className="w-48 mx-auto mask mask-hexagon">
                        <img src={image} alt="Shoes" className="" />
                    </div>
                </div>
                <div className="card-body items-center space-y-2 text-center">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p className="text-base">Email : <span className="font-bold text-stone-500">{email}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Instructor;