import subLogo from '../assets/logo/sub-logo.svg'

const SectionTitle = ({ heading, specialWord, subHeading }) => {
    return (
        <div className="mb-20 space-y-3">
            <h3 className="text-2xl lg:text-4xl font-bold">{heading} <span className="text-[#CB4154]">{specialWord}</span></h3>
            {
                subHeading &&
                <div className='flex justify-center'>
                    <img src={subLogo} alt="" />
                </div>
            }
            <p className="text-sm lg:text-lg">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;