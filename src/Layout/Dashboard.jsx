import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo/logo.svg.svg"
import bg from '../assets/background-img/bg-2.png'
import useAdmin from "../hooks/useAdmin";
import useVerifyInstructor from "../hooks/useVerifyInstructor";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useVerifyInstructor();
    return (
        <div className="pt-[120px]">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div style={{ backgroundImage: `url(${bg})` }} className="drawer-content flex flex-col items-center relative">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side bg-[#00AFA7] bg-opacity-80">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 pt-10 w-72 h-full text-base-content">
                        {/* Web logo and name */}
                        <li>
                            <div className="flex items-center">
                                <div className="hidden lg:block w-14">
                                    <Link to='/'>
                                        <img src={logo} alt="" />
                                    </Link>
                                </div>
                                <h2 className="text-2xl italic text-white">Langu
                                    <span className="font-bold text-3xl">agevio</span>
                                </h2>
                            </div>
                        </li>
                        {/* links */}
                        {
                            isAdmin && <>
                                <li><NavLink to="/dashboard/home" style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? 'transparent' : 'transparent'
                                })}>My Home</NavLink></li>
                                <li><NavLink to="/dashboard/allUsers" style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? 'transparent' : 'transparent'
                                })}>Manage Users</NavLink></li>
                            </>
                        }
                        {
                            isInstructor && <>
                               <li><NavLink to="/dashboard/home" style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? 'transparent' : 'transparent'
                                })}>My Home</NavLink></li>
                                <li><NavLink to="/dashboard/selected" style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? 'transparent' : 'transparent'
                                })}>Add Class</NavLink></li>
                            </>
                        }
                        {
                            !isAdmin && !isInstructor &&  <>
                                <li><NavLink to="/dashboard/home" style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? 'transparent' : 'transparent'
                                })}>My Home</NavLink></li>
                                <li><NavLink to="/dashboard/selected" style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black',
                                    background: isActive ? 'transparent' : 'transparent'
                                })}>My Selected Classes</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;