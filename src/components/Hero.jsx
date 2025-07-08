import React from "react";
import Carousel from "./Carousel";
import CreateTeamPopup from '../components/CreateTeam.jsx';

function Hero() {
    const [showCreateTeamPopup, setShowCreateTeamPopup] = React.useState(false);
    return (
        <section className="w-full">
            <div className="max-w-[1360px] px-10 w-full lg:pb-20 lg:pt-32 sm:pb-16 sm:pt-24 pb-8 pt-16 flex lg:flex-row flex-col justify-center items-center mx-auto">
                <div className="flex-col lg:w-2/5 w-full lg:m-0 mb-10">
                    <p className="font-inter text-h1 text-white font-bold capitalize w-[320px] text-left leading-[54px]">
                        Play Football Anytime, Anywhere.
                    </p>
                    <div className="flex items-start mt-[40px] gap-[20px]">
                        <button className="font-inter text-h5 text-black font-bold bg-white border-2 border-white hover:bg-black hover:text-white hover:border-black duration-300 rounded-xl p-2 cursor-pointer capitalize">Join a Match</button>

                        <button onClick={() => setShowCreateTeamPopup(true)} className="font-inter text-h5 text-white font-bold border-2 border-white hover:bg-black hover:text-white hover:border-black duration-300 rounded-xl p-2 cursor-pointer capitalize">create team</button>
                    </div>
                </div>

                <div className="flex items-center justify-center lg:w-3/5 w-full">
                    <Carousel/>
                </div>
            </div>

            {/* Create Team Popup */}
          {showCreateTeamPopup && (
            <CreateTeamPopup onClose={() => setShowCreateTeamPopup(false)} />
          )}
        </section>
    )
}

export default Hero