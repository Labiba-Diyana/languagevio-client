import subLogo from '../assets/logo/sub-logo.svg'

const SectionTitle = ({heading, specialWord, subHeading}) => {
    return (
        <div className="mb-20 space-y-3">
            <h3 className="text-4xl font-bold">{heading} <span className="text-[#CB4154]">{specialWord}</span></h3>
            <div className='flex justify-center'>
                <img src={subLogo} alt="" />
            </div>
            <p className="text-lg">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;