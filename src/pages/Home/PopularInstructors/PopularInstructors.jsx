import useInstructor from "../../../hooks/useInstructor";
import SwiperInstructor from "./SwiperInstructor";

const PopularInstructors = () => {
    const [instructors] = useInstructor();
    const popular = instructors.filter(instructor => instructor?.category === 'popular');

    return (
        <div className="py-20">
             <SwiperInstructor instructors={popular}></SwiperInstructor>
        </div>
    );
};

export default PopularInstructors;