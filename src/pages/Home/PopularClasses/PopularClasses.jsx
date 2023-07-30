import useClasses from "../../../hooks/useClasses";
import SwipeClasses from "./SwipeClasses";


const PopularClasses = () => {
    const [classes] = useClasses();
    classes.sort((a, b) => b.students - a.students);
    const popularClasses = classes.slice(0, 6);

    return (
        <div className="pt-32 pb-14">
            <SwipeClasses classes={popularClasses}></SwipeClasses>
        </div>
    );
};

export default PopularClasses;