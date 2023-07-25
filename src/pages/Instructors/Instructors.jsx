import Instructor from "../../components/Instructor";
import SectionTitle from "../../components/SectionTitle";
import useInstructor from "../../hooks/useInstructor";
import bg from '../../assets/background-img/bg.png'


const Instructors = () => {
    const [instructors] = useInstructor()
    console.log(instructors)
    return (
        <div style={{backgroundImage: `url(${bg})`}} className="bg-[#7bcac3] text-white pt-44 pb-36">
            <div className="w-3/4 mx-auto text-center">                
                    <SectionTitle heading="Our" specialWord="Instructors" subHeading="We are dedicated to give our best. Professionalism is our main concern."></SectionTitle>
                <div className="grid grid-cols-3 gap-9">
                    {
                        instructors.map(instructor => <Instructor
                            key={instructor.name}
                            instructor={instructor}></Instructor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;