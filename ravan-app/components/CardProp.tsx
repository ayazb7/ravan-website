"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  imageSrc: StaticImageData;
  text: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, text, content }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg mx-2 my-4 w-10/12 md:w-1/4 h-[60vh] cursor-pointer">
      <div className="relative w-full h-[60%]">
        <Image src={imageSrc} alt={text} layout="fill" objectFit="cover" />
      </div>
      <div className="bg-[#2A2A2A] text-white text-start py-2 font-bold text-2xl flex flex-col items-start  h-[40%]">
        <p className='ml-10'>{text}</p>
        <p className='ml-10 text-lg font-medium w-[20vw]'>{content}</p>
      </div>
    </div>
  );
};

export default Card;
