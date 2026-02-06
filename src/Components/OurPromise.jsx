import promisePeo from '../assets/promisePeople.png'

const OurPromise = () => {
    return (
        <>
            <section className='py-10 border-b border-gray-200 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-25 px-4'>

                <div className='text-start max-w-xl'>
                    <button className='rounded-full bg-sky-100 text-sky-600 font-bold px-5 py-2'>OUR PROMISE</button>
                    <h1 className='mt-5 text-3xl font-normall'>Tool <strong>built for people.</strong></h1>
                    <p className='text-md text-gray-500 capitalize mt-5'>Whether you want to edit your Google Docs, <br /> resolve Jira issues, or collaborate over Zoom. <br /></p>
                    <p className='text-md text-gray-500 capitalize mt-5'>
                        Circle has 100+ integrations with tools you  <br /> already use and love.</p>
                    <button className='px-6 py-3 bg-sky-500 text-white font-bold hover:bg-sky-600 mt-12'>Get started free</button>
                </div>
                <div className='flex justify-center'>
                    <img
                        className='rounded-3xl w-full max-w-[500px] h-auto lg:h-[70vh] object-cover'
                        src={promisePeo}
                        alt=""
                    />
                </div>
            </section>
        </>
    )
}

export default OurPromise