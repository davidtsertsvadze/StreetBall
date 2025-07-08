import React from "react";
import arrow from '../assets/arrow.jpg'


function HowItWorksSection() {
    return (
        <section className="w-full bg-white">
            <div className="max-w-[1360px] px-10 w-full sm:pt-16 sm:pb-32 pt-12 pb-24 flex flex-col justify-items-start mx-auto">
                <h3 className="font-inter text-h2 text-black font-bold capitalize text-left leading-[54px] mb-16">How It Works</h3>
                <div className="md:flex grid grid-cols-3 justify-items-center items-center md:items-center md:justify-between gap-5">
                    <div className="flex flex-col justify-center items-center">
                        <div className="xl:w-[116px] xl:h-[116px] lg:w-24 lg:h-24 w-20 h-20 bg-gradient-to-b from-[#0230F7] to-[#00024C] rounded-full"></div>
                        <p className="font-inter lg:text-h6 text-xs text-black font-bold text-center pt-4">Create Account</p>
                    </div>
                    <img className="pb-12 xl:w-52 lg:w-40 md:w-20 w-16" src={arrow} alt="arrow"/>
                    <div className="flex flex-col justify-center items-center">
                        <div className="xl:w-[116px] xl:h-[116px] lg:w-24 lg:h-24 w-20 h-20 bg-gradient-to-b from-[#0230F7] to-[#00024C] rounded-full"></div>
                        <p className="font-inter lg:text-h6 text-xs text-black font-bold text-center pt-4">Join Team</p>
                    </div>
                    <img className="pb-12 xl:w-52 lg:w-40 md:w-20 w-16 md:block hidden" src={arrow} alt="arrow"/>
                   <div className="flex flex-col justify-center items-center">
                        <div className="xl:w-[116px] xl:h-[116px] lg:w-24 lg:h-24 w-20 h-20 bg-gradient-to-b from-[#0230F7] to-[#00024C] rounded-full"></div>
                        <p className="font-inter lg:text-h6 text-xs text-black font-bold text-center pt-4">Find Match</p>
                    </div>
                    <img className="pb-12 xl:w-52 lg:w-40 md:w-20 w-16" src={arrow} alt="arrow"/>
                    <div className="flex flex-col justify-center items-center">
                        <div className="xl:w-[116px] xl:h-[116px] lg:w-24 lg:h-24 w-20 h-20 bg-gradient-to-b from-[#0230F7] to-[#00024C] rounded-full"></div>
                        <p className="font-inter lg:text-h6 text-xs text-black font-bold text-center pt-4">Play & Win</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorksSection