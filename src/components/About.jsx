import React from "react";
import { Linkedin } from 'lucide-react';
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3242128328.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <div className="min-h-screen flex flex-col bg-[url('/about.png')] bg-cover bg-center relative max-w-[1500px] mx-auto text-white font-DM_Sans">

            <div className="md:flex-row justify-center items-center gap-10 md:px-10">
                <h2 className="text-xl md:text-4xl font-DM_Sans font-semibold mb-10 mt-10">About Us</h2>
                <div className="flex flex-row md:flex-row justify-center items-center md:items-center gap-5 px-5 py-5 pb-12">
                    <div className="relative">
                        <img
                            src="/ashwin-image.png" // Replace with actual image path
                            alt="Ashwin"
                            className=" md:w-40 md:h-40 rounded-full bg-white object-contain"
                        />
                        <div className="absolute bottom-0 right-0 bg-white/30 backdrop-blur-sm border text-white rounded-full w-10 h-10 flex items-center justify-center">
                            <span className="text-lg"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                        </div>
                    </div>
                    <div className="max-w-md ">

                        <p className="text-sm md:text-base inline">
                            <p className="text-md font-semibold inline">Ashwin</p> is the founder of MobiusEngine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of leadership at Google and JP Morgan, Ashwin held product and GTM roles. Ashwin is an MBA holder from Yale University.
                        </p>
                        <p className="text-sm md:text-base mt-2">
                            Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
                        </p>
                    </div>
                </div>


                <div className="flex flex-row md:flex-row justify-center items-center md:items-center pt-10 gap-5 px-5 py-5 pb-12">
                    <div className="relative">
                        <img
                            src="/nicole-image.png" // Replace with actual image path
                            alt="Nicole"
                            className="md:w-40 md:h-40 rounded-full bg-white object-contain"
                        />
                        <div className="absolute bottom-0 right-0 bg-white/30 backdrop-blur-sm blur-2 border text-white rounded-full w-10 h-10 flex items-center justify-center">
                            <span className="text-lg"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                        </div>
                    </div>
                    <div className="max-w-md px-5">

                        <p className="text-sm md:text-base inline">
                            <p className="text-md font-semibold inline">Nicole</p> is an executive coach at Mobius specializing in resume builds and advisory.
                        </p>
                        <p className="text-sm md:text-base mt-2">
                            With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center px-5 gap-5 mt-10 mb-10 text-sm md:text-base">
                <a href="#" className=" hover:text-blue-300">
                    Learn more about our Board of Advisors →
                </a>
                <a href="#" className=" hover:text-blue-300">
                    Follow us on our LinkedIn page →
                </a>
            </div>


        </div>
    );
}

export default About;