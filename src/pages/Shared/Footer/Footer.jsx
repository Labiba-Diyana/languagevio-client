import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.svg.svg"


const Footer = () => {
    return (
        <div className="text-center">
            <footer className="footer px-24 py-20 bg-[#001a33] text-white">
                <div>
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
                    <p className="w-64 text-start pl-6 text-slate-400">We do our best, for the best. The students  satisfaction and better future is  our first priority. We want our student to achieve their goal.</p>
                </div>
                <div className="text-base text-slate-400">
                    <span className="mb-4 font-bold uppercase text-[#00AFA7] underline underline-offset-[10px]">Services</span>
                    <a className="link link-hover">Scholarship</a>
                    <a className="link link-hover">Live Consultation</a>
                    <a className="link link-hover">Online Classes</a>
                    <a className="link link-hover">Free Enrolment</a>
                </div>
                <div className="text-base text-slate-400">
                    <span className="mb-4 font-bold uppercase text-[#00AFA7] underline underline-offset-[10px]">Contact Info</span>
                    <a href='https://www.google.com/' className="link link-hover">Email: languagevio@gmail.com</a>
                    <a className="link link-hover">Call us:  02 8840753/02 8840211</a>
                    <a className="link link-hover">Address: Road : 6/c, Uttara , Dhaka-1230</a>
                    <a className="link link-hover">Available: Mon-Fri (9.00am-4.00pm)</a>
                </div>
                <div className="text-base text-slate-400">
                    <span className="mb-4 font-bold uppercase text-[#00AFA7] underline underline-offset-[10px]">Follow Us</span>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://twitter.com/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a href="https://www.youtube.com/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a href="https://www.facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-5 bg-[#00AFA7] text-white">
                <div className="text-base">
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
