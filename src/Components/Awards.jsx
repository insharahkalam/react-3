// import React from 'react'
// import Cards from './Cards'

// const Awards = () => {
//     return (
//         <>
//             <section className='py-15 '>
//                 <div className='flex flex-col items-center justify-center'>
//                     <button className="rounded-full bg-sky-100 text-sky-600 font-bold px-5 py-2">Awards</button>
//                     <h1 className='text-2xl mt-5'>An <strong>award winning</strong> platform, <strong>loved by customers</strong>.</h1>
//                 </div>
//                 <div className='grid grid-cols-3 place-items-center mt-10 gap-10'>
//                     <Cards />
//                     <Cards />
//                     <Cards />
//                     <Cards />
//                     <Cards />
//                     <Cards />
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Awards


import React from 'react'
import Cards from '../Components/Cards'
const Awards = () => {
  return (
    <section className="py-16">
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
    <div className='grid grid-cols-3 place-items-center mt-10 gap-6'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
    </div>

</section>

  )
}

export default Awards