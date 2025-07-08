import React from "react";
import siteLogo from '../assets/Logo.svg'
import igicon from '../assets/igicon.svg'
import fbicon from '../assets/fbicon.svg'
import yticon from '../assets/yticon.svg'
import googleplay from '../assets/googleplay.png'
import appstore from '../assets/appstore.png'

function Footer() {
    return (
        <footer className="w-full bg-gradient-to-b from-[#00024C] via-[#000239] to-[#00011F]">
            <div className="max-w-[1360px] min-h-[600px] px-10 w-full  pb-14 pt-11 flex flex-col justify-between mx-auto">
                <a href="#home"><img className="aspect-[250/65] sm:w-[250px] w-[150px]" src={siteLogo} alt="Site Logo"/></a>
                <div>
                    <div className="md:flex-row flex flex-col justify-between">
                        <div className="flex md:flex-col sm:flex-row flex-col justify-between items-start">
                            <div className="flex flex-row gap-2.5 items-center mb-8 ">
                                <h4 className="font-inter text-h3 text-white font-bold">Follow us on</h4>
                                <div className="md:p-2 p-1 border-white border-2 rounded-full">
                                    <a href="#igicon"><img src={igicon} alt="Insagram icon"/></a>
                                </div>
                                <div className="md:p-2 p-1 border-white border-2 rounded-full">
                                    <a href="#fbicon"><img src={fbicon} alt="Facebook icon"/></a>
                                </div>
                                <div className="md:p-2 p-1 border-white border-2 rounded-full">
                                    <a href="#yticon"><img src={yticon} alt="YouTube icon"/></a>
                                </div>
                            </div>
                            <a href=""><p className="font-inter text-h5 text-white font-bold">About Us</p></a>
                            <a href=""><p className="font-inter text-h5 text-white font-bold">Support</p></a>
                            <a href=""><p className="font-inter text-h5 text-white font-bold">F . A . Q</p></a>
                        </div>
                        <div className="flex gap-5 sm:mt-0 mt-8">
                            <a href="#createAccount">
                                <img className="bg-cover lg:w-[200px] w-[150px]" src={googleplay} alt="Google Play"/>
                            </a>
                            <a href="#createAccount">
                                <img className="bg-cover lg:w-[200px] w-[150px]" src={appstore} alt="App store"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-between gap-2.5">
                        <a href=""><p className="font-inter sm:text-h5 text-xs text-white font-bold">Privacy</p></a>
                        <a href=""><p className="font-inter sm:text-h5 text-xs text-white font-bold">Terms and conditions</p></a>
                        <a href=""><p className="font-inter sm:text-h5 text-xs text-white font-bold">Terms and conditions</p></a>
                        <a href=""><p className="font-inter sm:text-h5 text-xs text-white font-bold">Terms and conditions</p></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer