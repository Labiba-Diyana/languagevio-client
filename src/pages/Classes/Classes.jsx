import SectionTitle from "../../components/SectionTitle";
import SingleClass from "../../components/SingleClass/SingleClass";
import useClasses from "../../hooks/useClasses";
import bg from '../../assets/background-img/bg.png'


const Classes = () => {
    const [classes] = useClasses();

    return (
        <div style={{backgroundImage: `url(${bg})`}} className="bg-[#7bcac3] text-white pt-44 pb-36 text-center">
            <SectionTitle heading="Our" specialWord="Classes" subHeading="All type of classes are here to chase your dream."></SectionTitle>
            <div className="w-10/12 mx-auto grid grid-cols-3 gap-x-6 gap-y-16">
                {
                    classes.map(singleClass => <SingleClass
                        key={singleClass._id}
                        singlesClass={singleClass}></SingleClass>)
                }
            </div>
        </div>
    );
};

export default Classes;