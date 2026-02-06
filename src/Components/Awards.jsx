import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import leader from '../assets/leader.png'
import Cards from '../Components/Cards'

const Awards = () => {
    return (
        <section className="py-16 border-b border-gray-200">
            {/* Header */}
            <div className="flex flex-col items-center justify-center">
                <button className="rounded-full bg-sky-100 text-sky-600 font-bold px-5 py-2">
                    Awards
                </button>
                <h1 className="text-2xl mt-5 text-center">
                    An <strong>award winning</strong> platform, <strong>loved by customers</strong>.
                </h1>
            </div>

            {/* Cards Grid */}
            <div className='flex justify-center items-center flex-wrap  mt-10 gap-10'>
                <Cards className={'bg-[#FFF5F3]'} img={leader} title={<>Market leader across <br /> 18 categories</>} />
                <Cards className={'bg-[#FFF0F9]'} img={icon2} title={<>Most loved SaaS tool <br /> in 2021</>} />
                <Cards className={'bg-[#ECFFFF]'} img={icon3} title={<>Category leader in <br /> 2022</>} />
                <Cards className={'bg-[#F6F4FF]'} img={icon4} title={<>Most recommended <br /> tool in 2021</>} />
                <Cards className={'bg-[#FFF9E7]'} img={icon5} title={<>Champion in survey <br /> tool 2022</>} />
                <Cards className={'bg-[#FFEDE4]'} img={icon6} title={<>Top performer spring <br /> 2021</>} />

            </div>

        </section>

    )
}

export default Awards