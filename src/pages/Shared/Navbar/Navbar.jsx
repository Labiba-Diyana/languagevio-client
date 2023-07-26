import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.svg.svg"
import useAuth from "../../../hooks/useAuth";


const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => {
            console.log(error)
        })
    }

    const navBarLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        {
            user?.email && <li><Link to="/dashboard/home">Dashboard</Link></li>
        }
    </>

    return (
        <div className="navbar max-w-[1600px] pt-10 px-36 fixed z-10 bg-white bg-opacity-80">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navBarLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <div className="hidden lg:block">
                        <Link to='/'>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <h2 className="text-3xl italic">Langu
                        <span className="text-[#CB4154] font-bold text-4xl">a</span>
                        <span className="text-[#e7ae34] font-bold text-4xl">ge</span>
                        <span className="text-[#00AFA7] font-bold text-4xl">vio</span>
                    </h2>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 text-base text- font-semibold">
                    {navBarLinks}
                </ul>
            </div>
            <div className="pl-8">
                {
                    user?.email ?
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0}>
                                <div className="avatar online">
                                    <div className="w-12 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li onClick={handleLogOut}><a>Logout</a></li>
                            </ul>
                        </div> :
                        <Link to="/login"><button className="btn bg-[#00AFA7] w-24 text-white rounded-full border-none">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;