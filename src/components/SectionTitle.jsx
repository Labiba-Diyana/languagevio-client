

const SectionTitle = ({heading, specialWord, subHeading}) => {
    return (
        <div className="mb-24 space-y-3">
            <h3 className="text-4xl font-bold">{heading} <span className="text-[#CB4154]">{specialWord}</span></h3>
            <div className='flex justify-center'>
                <img className='w-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDfeQEYG6i1I3ziGgQ9I4hxeDROgTdAjpt9EEcuZRx4ewwMnTs70BAXch01t2Dmi36pM&usqp=CAU" alt="" />
            </div>
            <p className="text-lg">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;