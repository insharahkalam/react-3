import peoples from "../assets/group.png";
import gemenie from '../assets/gemini.png'
import yamaha from '../assets/yamaha.png'
import biocon from '../assets/biocon.png'
import dell from '../assets/dell.png'
import ck from '../assets/ck.png'
import shell from '../assets/shell.png'
import { LuCheck } from "react-icons/lu";

const Customers = () => {
    return (
        <section className="w-full border-b border-gray-200 flex justify-center items-center flex-col bg-white py-16 px-4">

            <img className="-mt-35  z-40" src={peoples} alt="" />

            <div className="mt-10 sm:mt-15 text-center px-4">
                <button className="rounded-full bg-sky-100 text-sky-600 font-bold px-5 py-2 text-sm sm:text-base">
                    Our Customers
                </button>

                <p className="text-xl sm:text-2xl mt-5 leading-snug">
                    Trusted by <strong>100,000+ customers</strong> in 90+ countries
                </p>

                {/* Logos */}
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 my-8 sm:my-10">
                    <img className="h-8 sm:h-10 md:h-12 w-auto" src={gemenie} alt="" />
                    <img className="h-8 sm:h-10 md:h-12 w-auto" src={yamaha} alt="" />
                    <img className="h-8 sm:h-10 md:h-12 w-auto" src={biocon} alt="" />
                    <img className="h-7 sm:h-9 md:h-11 w-auto" src={dell} alt="" />
                    <img className="h-8 sm:h-10 md:h-12 w-auto" src={ck} alt="" />
                    <img className="h-8 sm:h-10 md:h-12 w-auto" src={shell} alt="" />
                </div>

                {/* Checks */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center items-center text-sm sm:text-md">
                    <p className="flex items-center gap-1">
                        <LuCheck className="text-sky-500 mt-1" />
                        <strong className="text-sky-500">18281</strong> signed up last month
                    </p>

                    <p className="flex items-center gap-1">
                        <LuCheck className="text-sky-500 mt-1" />
                        <strong className="text-sky-500">GDPR</strong>- &
                        <strong className="text-sky-500">CCPA</strong>-ready
                    </p>

                    <p className="flex items-center gap-1">
                        <LuCheck className="text-sky-500 mt-1" />
                        <strong className="text-sky-500">Leader@G2</strong> Summer
                    </p>
                </div>
            </div>


        </section>
    );
};

export default Customers;
