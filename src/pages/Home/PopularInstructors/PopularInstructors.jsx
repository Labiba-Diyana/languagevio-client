import useInstructor from "../../../hooks/useInstructor";
import SwiperInstructor from "./SwiperInstructor";

const PopularInstructors = () => {
    const [instructors] = useInstructor();
    const popular = instructors.slice(0, 6);

    return (
        <div className="py-20">
             <SwiperInstructor instructors={popular}></SwiperInstructor>
        </div>
    );
};

export default PopularInstructors;