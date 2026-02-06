// import React from "react";
// import girl from '../assets/girl.png'
// import paypal from '../assets/paypal.png'
// const TestimonialSection = () => {
//     return (
//         <section className="w-full bg-white py-20">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

//                     {/* LEFT CONTENT */}
//                     <div className="text-start ps-50">
//                         <button className="rounded bg-sky-100 text-sky-600 font-bold px-5 py-1.5 mb-3">
//                             Testimonials
//                         </button>
//                         <h2 className="text-4xl font-normall text-gray-900 leading-tight mb-6">
//                             See how <br />
//                             customers <br />
//                             <strong >drive impact</strong>
//                         </h2>

//                         <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 text-sm font-semibold transition">
//                             See case studies
//                         </button>
//                     </div>

//                     {/* RIGHT CONTENT */}
//                     <div className="relative flex justify-start">

//                         {/* IMAGE CARD */}
//                         <div className="relative w-[300px] h-[380px] rounded-lg overflow-hidden shadow-lg">
//                             <img
//                                 src={girl}
//                                 alt="Customer"
//                                 className=" object-cover"
//                             />
//                         </div>

//                         {/* PAYPAL CARD */}
//                         <div className="absolute right-5 top-2/3 -translate-y-1/2 bg-[#EDFEFF] w-[320px] p-6 rounded-lg shadow-md">
//                             <div className="flex items-center gap-2 mb-4">
//                                 <img width={120}
//                                     src={paypal}
//                                     alt="PayPal"
//                                 />
//                             </div>

//                             <p className="text-sm text-gray-700 leading-relaxed mb-4">
//                                 “I used to have a bunch of different tools I had to pay for,
//                                 with Circle you get everything in one bundle.”
//                             </p>

//                             <div>
//                                 <p className="font-semibold text-gray-900 text-sm">
//                                     Michel Dedrick
//                                 </p>
//                                 <p className="text-xs text-gray-500">
//                                     Senior Conversion Optimizer
//                                 </p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TestimonialSection;


import React from "react";
import girl from '../assets/girl.png';
import paypal from '../assets/paypal.png';

const TestimonialSection = () => {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-start lg:ps-50">
                        <button className="rounded bg-sky-100 text-sky-600 font-bold px-5 py-1.5 mb-3 text-sm sm:text-base">
                            Testimonials
                        </button>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 leading-snug mb-6">
                            See how <br />
                            customers <br />
                            <strong>drive impact</strong>
                        </h2>

                        <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 text-sm sm:text-base font-semibold transition">
                            See case studies
                        </button>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative flex justify-center lg:justify-start mt-10 lg:mt-0">

                        {/* IMAGE CARD */}
                        <div className="relative w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-[380px] rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={girl}
                                alt="Customer"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* PAYPAL CARD */}
                        <div className="absolute top-1/2 lg:top-2/3 right-0 lg:-right-5 transform -translate-y-1/2 lg:translate-y-[-33%] bg-[#EDFEFF] w-72 sm:w-80 lg:w-[320px] p-4 sm:p-6 rounded-lg shadow-md">
                            <div className="flex items-center gap-2 mb-4">
                                <img
                                    src={paypal}
                                    alt="PayPal"
                                    className="h-6 sm:h-7 md:h-8"
                                />
                            </div>

                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                                “I used to have a bunch of different tools I had to pay for,
                                with Circle you get everything in one bundle.”
                            </p>

                            <div>
                                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                                    Michel Dedrick
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500">
                                    Senior Conversion Optimizer
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
