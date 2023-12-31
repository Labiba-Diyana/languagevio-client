import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useVerifyInstructor from "../hooks/useVerifyInstructor";


const InstructorRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useVerifyInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user && isInstructor) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;