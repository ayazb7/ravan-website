import Image from 'next/image'
import React from 'react'
import Bg from "@/logos/AboutHome1.png"
import svg from "@/logos/arc.svg"

const AboutUs = () => {
  return (
    <div className='relative h-[120vh] w-full '>
        <div className=''>
        <h1 className='z-20 text-white absolute top-36 ml-6 space-y-20'>
            <p className='text-6xl '>Who we Are</p> 
            <p className='text-3xl '>About Ravan</p>
            <p className='text-3xl w-[55vw] leading-[45px] tracking-wider'>Welcome to Ravan Real Estate, your trusted partner in Dubai's property market. Whether you're seeking residential, commercial, or off-plan properties, we offer expert guidance and a seamless experience. Established in 2024, we are dedicated to helping you find the perfect fit in Dubai's real estate landscape.</p>
        </h1>
        
        
        <Image 
            src={svg} 
            alt="gray arc to write text on" 
            className='z-10 absolute -top-60 ' 
            
        />
        </div>
        <button className='z-20 absolute text-white outline-white  bottom-28 right-1/3 w-[15vw] h-[6vh] rounded-md outline-double'>Contact Us</button>
        
        <Image 
            src={Bg} 
            alt="About us background with bright Dubai skyline"
            fill={true} 
            className='object-cover z-0'
        />
      
    </div>
  )
}

export default AboutUs
