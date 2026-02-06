// import leader from '../assets/leader.png'

// const Cards = () => {
//     return (
//         <>
//             <section className='bg-pink-300 flex flex-col justify-center items-center gap-5 w-48 h-48 '>
//                 <img width={100} src={leader} alt="" />
//                 <p className='font-semibold text-center text-lg '>Market leader across <br /> 18 categories</p>
//             </section>
//         </>
//     )
// }

// export default Cards


import leader from '../assets/leader.png'

const Cards = () => {
    return (
        <section className='bg-pink-300 flex flex-col justify-center items-center gap-3 w-72 h-72 p-4 rounded'>
            <img width={100} src={leader} alt="Leader badge" />
            <p className='font-semibold text-center text-lg'>
                Market leader across <br /> 18 categories
            </p>
        </section>
    )
}

export default Cards
