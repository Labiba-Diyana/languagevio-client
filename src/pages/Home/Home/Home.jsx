import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import TopSlider from "../TopSlider/TopSlider";


const Home = () => {
    return (
        <div>
            <TopSlider></TopSlider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;