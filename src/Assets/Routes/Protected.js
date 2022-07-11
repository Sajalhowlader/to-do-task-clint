import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const Protected = () => {
    const [user] = useAuthState(auth)
    let location = useLocation();
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return <Outlet/>
};

export default Protected;