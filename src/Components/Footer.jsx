import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Maskgroup from '../assets/Maskgroup.png'

const Footer = () => {
    return (
        <footer className="bg-[#1f1f1f] text-gray-400 px-6 md:px-20 py-14">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">

                {/* Left Logo / Map */}
                <div>
                    <img
                        src={Maskgroup}
                        alt="map"
                        className="w-40 mt-12 "
                    />

                </div>

                {/* Products */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Products</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Delta</li>
                        <li>Sigma</li>
                        <li>Zeta</li>
                        <li>Alpha</li>
                        <li>Acumen</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Help</li>
                        <li>Training Videos</li>
                        <li>Webinars</li>
                        <li>Request a Demo</li>
                        <li>Create Surveys</li>
                        <li>Quiz Maker</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-6 text-sm gap-4">
                <p>Copyright © 2022 Circle. All rights reserved.</p>

                {/* Social Icons */}
                <div className="flex gap-4 text-white">
                    <span className="p-2 border border-gray-600 rounded-full cursor-pointer hover:bg-gray-700">
                        <FaLinkedinIn size={14} />
                    </span>
                    <span className="p-2 border border-gray-600 rounded-full cursor-pointer hover:bg-gray-700">
                        <FaTwitter size={14} />
                    </span>
                </div>

                {/* Policies */}
                <div className="flex flex-wrap gap-4 justify-center text-gray-400">
                    <span>Privacy Policy</span>
                    <span>Data & Security</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
