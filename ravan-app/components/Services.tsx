import Image from '@/node_modules/next/image'
import React from 'react'
import bg from "@/logos/servicebg.png"
import cardBg from "@/logos/cardImage.png"
import Card from './Card'
const Services = () => {
  return (
    <div  className='relative h-[120vh] w-full '>
        <h1 className='z-20 text-white absolute top-20 left-[36vw] text-6xl space-y-20'>Our Services</h1>
        <Image
            src={bg} 
            alt="gray arc to write text on" 
            className='z-10 absolute' 
        />
        <div className='absolute z-30 w-full h-full top-[32vh] flex'>
        
            <Card imageSrc = {cardBg} text="Commercial" content="" redirectUrl="/Commercial"/>
            <Card imageSrc = {cardBg} text="Resedential" content="" redirectUrl="/Commercial"/>
            <Card imageSrc = {cardBg} text="Holiday Homes" content="" redirectUrl="/Commercial"/>
            <Card imageSrc = {cardBg} text="Off Plan" content="" redirectUrl="/Commercial"/>
            
        </div>
    </div>
  )
}

export default Services