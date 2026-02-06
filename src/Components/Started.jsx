import { FaAngleRight } from "react-icons/fa6";
import background from '../assets/background.png'

const Started = () => {
    return (
        <>
            <section className="mt-12 bg-cover bg-center "  style={{ backgroundImage: `url(${background})` }}>
                <div className="flex items-center flex-col justify-center">
                    <h1 className="text-4xl text-black text-center  font-bold leading-12 font-serif ">A powerful online engagement tool <br /> that&apos;s intuitive and simple to use.</h1>
                    <p className="text-gray-400 text-sm text-center mt-5">With stellar one-click reports and unmatched support, see how  <br />Circle will make a difference in your business.</p>
                    <button className="border gap-2 flex justify-center items-center py-3 mt-5 px-5 border-sky-500 bg-sky-500 text-white text-sm font-bold hover:bg-sky-600">Get started free <FaAngleRight /></button>
                </div>
            </section>
        </>
    )
}

export default Started