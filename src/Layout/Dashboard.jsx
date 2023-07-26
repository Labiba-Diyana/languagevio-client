import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="pt-[120px]">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side bg-[#00AFA7]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 h-full text-base-content">
                        <li><NavLink to="/dashboard/selected" style={({ isActive }) => ({
                            color: isActive ? 'white' : '',
                            background: isActive ? 'transparent' : 'transparent'
                        })}>My Selected Classes</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;