import peoples from "../assets/people.png";
import gemenie from '../assets/gemini.png'
import yamaha from '../assets/yamaha.png'
import biocon from '../assets/biocon.png'
import dell from '../assets/dell.png'
import ck from '../assets/ck.png'
import shell from '../assets/shell.png'
import { LuCheck } from "react-icons/lu";

const Customers = () => {
    return (
        <section className="w-full border-b border-gray-200 flex justify-center items-center flex-col bg-white py-16">
            <svg className="-mt-55 relative" width="900" height="270" viewBox="0 0 900 260">
                <defs>
                    <clipPath id="cloudClip">

                        <rect x="0" y="120" width="900" height="140" />


                        <circle cx="90" cy="120" r="90" />
                        <circle cx="270" cy="120" r="90" />
                        <circle cx="450" cy="120" r="90" />
                        <circle cx="630" cy="120" r="90" />
                        <circle cx="810" cy="120" r="90" />
                    </clipPath>
                </defs>

                <image
                    href={peoples}
                    width="900"
                    height="260"
                    clipPath="url(#cloudClip)"
                    preserveAspectRatio="xMidYMid slice"
                />
            </svg>


            {/* <img src={peoples} width={800} className="relative -mt-50 h-[50vh] rounded-tl-[80px] rounded-br-[80px]" alt="" /> */}

            <div className="mt-15 text-center">
                <button className="rounded-full bg-sky-100 text-sky-600 font-bold px-5 py-2">Our Customers</button>
                <p className="text-2xl mt-5"> Trusted by <strong>100,000+ customers</strong>  in 90+ countries</p>
                <div className="flex items-center gap-10 my-10">
                    <img width={150} className="h-[7vh]" src={gemenie} alt="" />
                    <img width={150} className="h-[7vh]" src={yamaha} alt="" />
                    <img width={150} className="h-[7vh]" src={biocon} alt="" />
                    <img width={150} className="h-[5vh]" src={dell} alt="" />
                    <img width={150} className="h-[7vh]" src={ck} alt="" />
                    <img width={150} className="h-[7vh]" src={shell} alt="" />
                </div>
                <div className="flex gap-10 justify-center items-center">
                    <p className="text-md flex items-center gap-1"><LuCheck className="text-sky-500 mt-1" /> <strong className="text-sky-500">18281</strong> signed up last month</p>
                    <p className="text-md flex items-center gap-1"><LuCheck className="text-sky-500 mt-1" /> <strong className="text-sky-500">GDPR</strong>- & <strong className="text-sky-500">CCPA</strong>-ready</p>
                    <p className="text-md flex items-center gap-1"><LuCheck className="text-sky-500 mt-1" /> <strong className="text-sky-500"> Leader@G2 </strong>Summer</p>

                </div>
            </div>


        </section>
    );
};

export default Customers;
