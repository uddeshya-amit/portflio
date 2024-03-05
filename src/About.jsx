import React from 'react'
import Lottie from "lottie-react";
import anime from "./assets/animattion.json";

const About = () => {
  return (
    <div className='h-screen w-full text-white'>
        <div className='mt-32 px-8'>
            <h1 className=' text-3xl  lg:text-6xl font-bold '>About Me</h1>
        </div>
        <div className='grid grid-rows-2 lg:grid-cols-2 '>
            <div className='px-8 mt-8 text-lg font-semibold order-last lg:order-first'>
                <p className=''>I'm a frontend web-developer by profession, I find solace in crafting captivating digital experiences. </p>
                <p className='mt-4'>Outside of coding, I immerse myself in the world of cinema and venture into new places, seeking inspiration and adventure in every corner.</p>


            </div>
            <div className=' lg:block flex justify-center mt-8'>
                <Lottie 
                animationData={anime}
                className=' w-72 h-72  '
                />
            </div>
        </div>

    </div>
  )
}

export default About