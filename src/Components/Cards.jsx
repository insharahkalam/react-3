const Cards = ({img ,title , className}) => {
    return (
        <div className={`hover:scale-105 duration-500 transition ${className} flex flex-col justify-center items-center gap-10 w-[350px] h-[350px] p-4 rounded-md`}>
            <img width={150} src={img} alt="Leader badge" />
            <p className='font-semibold capitalize text-center text-xl'>
              {title}
            </p>
        </div>
    )
}

export default Cards
