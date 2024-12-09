import "./hero.css"
import React from 'react'

const Hero = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-4/5 flex justify-between md:py-12">
                <div className="w-2/4 flex">
                    <div>
                        <div className="max-w-full p-1 text-9xl font-bold"><h1>YOUR FEET DESERVES THE BEST</h1></div>
                        <div className="max-w-full p-1 text-xl py-6">
                            <p className="w-3/4">We are here for your feet as they deserves only the best.Make yourself confortable and wear the best.Nike is the gem of componay its premium its Nike because its the BEST.</p>
                        </div>
                        <div className="flex w-1/3 justify-between">
                        <div><button className="bg-red-500 border border-black text-xl px-3 py-2 text-white opacity-75">Shop Now</button></div>
                        <div><button className="text-xl px-1 py-2 border border-gray-500 text-gray-500">Category</button></div>
                        </div>

                        <div className="w-full font-semibold flex justify-start py-2">
                            <p>Also available on:</p>
                        </div>
                        <div className="w-full flex justify-start py-3">
                            <div className="flipkartimg"></div>
                            <div className="amazonimg"></div>
                        </div>

                    </div>
                </div>
                <div className="w-2/4">
                <div className="shoes w-full h-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
