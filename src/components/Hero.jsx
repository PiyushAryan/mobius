import React from "react"

function Hero() {


    return (
        <>

            <div className="min-h-screen flex flex-col bg-[url('/Gradient.png')] bg-cover bg-center relative max-w-[1500px]">

                <nav className="flex items-center justify-between font-sora p-7">


                    <img src="/logo.png" alt="MobuisEngine Logo" className="h-8 ml-5" />

                    <div className="flex-1 flex justify-center font-extrabold">
                        <div className="flex items-center gap-8 text-white font-medium text-sm">
                            <a href="#" className="hover:text-gray-300">Home</a>
                            <a href="#" className="hover:text-gray-300">About Us</a>
                            <a href="#" className="hover:text-gray-300">Plans</a>
                            <a href="#" className="hover:text-gray-300">Testimonials</a>
                            <a href="#" className="hover:text-gray-300">Privacy Policy</a>

                            <div className="relative group">
                                <button className="flex items-center gap-1 hover:text-gray-300">
                                    More <span>▾</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <button className="bg-white font-DM_Sans hover:text-[#FEFEFE] hover:bg-[#022183] text-[#022183] font-semibold px-6 py-3 rounded-full">
                            Get Started
                        </button>
                    </div>
                </nav>

                <div className="relative flex-1 flex items-center justify-center px-10">
                    <div className="max-w-xl text-white">
                        <h1 className="text-[2.75rem] font-semibold font-sora mb-6 leading-tight">
                            Land job interviews <br />
                            <span className="text-6xl text-[#0649E7]">10x</span> faster
                        </h1>
                        <p className="text-lg mb-8 font-DM_Sans">
                            Custom-built resumes that match your goals, keywords, and recruiter expectations.
                        </p>
                        <button className="bg-white font-DM_Sans hover:text-[#FEFEFE] hover:bg-[#022183] text-[#022183] font-semibold px-6 py-3 rounded-full">
                            Get Started →
                        </button>
                    </div>

                    <div className="text-right w-[290px] h-[400px] relative">
                        <img src="/banner.png" alt="hero-banner" className="w-full h-full object-cover" />
                        <div className="mt-12 absolute bottom-1 right-2">
                            <div className="w-[120px] h-[120px] bg-[rgba(217,217,217,0.3)] border-2 border-[#FEFEFE] rounded-full backdrop-blur-[6.80447px] box-border"></div>
                            <img src='/image.png' className='h-6 w-6 hover:bg-[#0649E7]'></img>
                        </div>
                        <div className="text-white">
                            <p className="font-DM_Sans text-center mt-5">Download Free E-Book</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Hero;
