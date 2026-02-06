import { FaFileLines } from "react-icons/fa6";
import { GiBoomerangSun } from "react-icons/gi";
import { BsFillCollectionFill } from "react-icons/bs";
import { TbVirusSearch } from "react-icons/tb";
import laptop from '../assets/laptop.png'
const Built = () => {
    return (
        <>
            <section className='py-10'>
                <div className='flex justify-center flex-col items-center gap-6'>
                    <button className="rounded-full bg-sky-100 text-sky-600 font-bold px-5 py-2">built for people</button>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-center px-4">
                        <strong>Easy</strong> for beginners. <strong>Powerful</strong> for experts.
                    </h1>

                </div>
                <div className="flex justify-center items-center gap-4 sm:gap-10 mt-10 flex-wrap px-4">

                    <span className="text-sky-500 text-base sm:text-lg font-medium flex items-center gap-2 border-b-2 cursor-pointer border-sky-500 leading-10 shrink-0">
                        <FaFileLines className="text-xl shrink-0" /> Create
                    </span>

                    <span className="hover:text-sky-500 text-gray-500 text-base sm:text-lg font-medium flex items-center gap-2 cursor-pointer hover:border-b-2 border-sky-500 leading-10 shrink-0">
                        <GiBoomerangSun className="text-xl shrink-0" /> Distribute
                    </span>

                    <span className="hover:text-sky-500 text-gray-500 text-base sm:text-lg font-medium flex items-center gap-2 cursor-pointer hover:border-b-2 border-sky-500 leading-10 shrink-0">
                        <BsFillCollectionFill className="text-xl shrink-0" /> Collect
                    </span>

                    <span className="hover:text-sky-500 text-gray-500 text-base sm:text-lg font-medium flex items-center gap-2 cursor-pointer hover:border-b-2 border-sky-500 leading-10 shrink-0">
                        <TbVirusSearch className="text-xl shrink-0" /> Analyze
                    </span>

                </div>

                <div className="bg-[#EDFEFF] py-10 w-full flex flex-col lg:flex-row justify-center items-center gap-10 px-4 sm:px-10 lg:px-50">

                    <div className="w-full lg:w-[50%]">
                        <h1 className="text-2xl sm:text-3xl font-semibold mb-5">Create</h1>
                        <h4 className="text-base sm:text-lg font-bold mb-3">
                            Advanced research software
                        </h4>
                        <p className="text-gray-500 leading-7 mb-5 text-sm sm:text-base">
                            Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.
                        </p>
                        <button className="px-7 py-3 text-white font-semibold hover:bg-sky-600 bg-[#0CBBC7]">Get started for free</button>
                    </div>

                    <div className="w-full lg:w-[50%] flex justify-center">
                        <img className="rounded-2xl w-full max-w-[500px]" src={laptop} alt="" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Built