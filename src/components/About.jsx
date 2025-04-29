import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-[url('/about.png')] bg-cover bg-center relative max-w-[1500px] mx-auto text-white font-DM_Sans">
                <div className="flex flex-col md:flex-col justify-center items-center gap-10 md:px-10">
                    <h2 className="text-xl md:text-4xl font-DM_Sans font-semibold mt-10">About Us</h2>

                    {/* Ashwin part */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5 px-5 py-5 pb-12">
                        <div className="relative">
                            <img
                                src="/ashwin-image.png"
                                alt="Ashwin"
                                className="md:w-40 md:h-40 rounded-full bg-white object-contain"
                            />
                            <div className="absolute bottom-0 right-0 bg-white/30 backdrop-blur-sm border text-white rounded-full w-10 h-10 flex items-center justify-center">
                                <span className="text-lg"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                            </div>
                        </div>
                        <div className="max-w-md px-5">
                            <p className="text-sm">
                                <span className="text-md font-semibold">Ashwin</span> is the founder of MobiusEngine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of leadership at Google and JP Morgan, Ashwin held product and GTM roles. Ashwin is an MBA holder from Yale University.
                            </p>
                            <p className="text-sm mt-2">
                                Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
                            </p>
                        </div>
                    </div>

                    {/* Nicole Part */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5 px-5 py-5 pb-12">
                        <div className="relative">
                            <img
                                src="/nicole-image.png"
                                alt="Nicole"
                                className="md:w-40 md:h-40 rounded-full bg-white object-contain"
                            />
                            <div className="absolute bottom-0 right-0 bg-white/30 backdrop-blur-sm border text-white rounded-full w-10 h-10 flex items-center justify-center">
                                <span className="text-lg"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                            </div>
                        </div>
                        <div className="max-w-md px-5">
                            <p className="text-sm">
                                <span className="text-sm font-semibold">Nicole</span> is an executive coach at Mobius specializing in resume builds and advisory.
                            </p>
                            <p className="text-sm mt-2">
                                With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Links part */}

                <div className="flex flex-col justify-center items-center px-5 gap-5 mt-10 mb-10 text-sm md:text-base">
                    <a href="#" className="hover:text-blue-300">
                        Learn more about our Board of Advisors →
                    </a>
                    <a href="#" className="hover:text-blue-300">
                        Follow us on our LinkedIn page →
                    </a>
                </div>
            </div>
            {/* ---------------- */}
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
                {/* Heading */}
                <h2 className="text-4xl font-DM_Sans font-semibold text-[#0649E7]">
                    What our clients have to say
                </h2>

                {/* Testimonial Cards */}
                <div className="flex space-x-6 my-10">
                    {[1, 2, 3].map((_, index) => (
                        <div
                            key={index}
                            className="w-72 rounded-2xl border border-blue-500 overflow-hidden shadow-md"
                        >
                            {/* Video Placeholder */}
                            <div className="bg-white  h-40 flex items-center justify-center rounded">
                                <div className="w-10 h-10 bg-[#0649E7]  rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>


                            <div className="bg-[#0649E7] text-white p-4 relative h-32">
                                <p className="text-sm leading-snug font-DM_Sans">
                                    Holly is a <strong>senior executive</strong> who got over <strong>10 job interviews</strong> and an offer she accepted
                                </p>


                                <div className="absolute bottom-3 right-3">
                                    <button className="w-8 h-8 bg-white text-[#0649E7] rounded-full flex items-center justify-center">
                                        <img src="/image.png"></img>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                    <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full flex items-center">
                        More customer testimonials
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full flex items-center">
                        Get Started
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

        </>
    );
}

export default About;