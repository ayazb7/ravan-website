import React, { useEffect, useState } from 'react';
import { useCurrency } from '@/context/currencyContext';

import EmblaCarousel from '@/components/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel'
import Image from '@/node_modules/next/image';
import bg1 from "@/logos/emaar.png"
import sobha from "@/logos/sobha.png"
import damac from "@/logos/damac.png"
import danbure from "@/logos/danbure.png"
const Partners: React.FC = () => {
  const { currency } = useCurrency();
  const [priceInCurrency, setPriceInCurrency] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }
  const SLIDE_COUNT = 10
  const SLIDES = [<Image src={bg1} alt="emaar"/>,<Image src={sobha} alt="sobha"/>,<Image src={damac} alt="damac"/>,<Image src={danbure} alt="danbure"/>]

  const BASE_PRICE_IN_AED = 1000; 

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/88779877658cb4d3df31b820/latest/AED` 
        );
        const data = await response.json();
        
        const exchangeRate = data.conversion_rates[currency];
        const convertedPrice = BASE_PRICE_IN_AED * exchangeRate;
        setPriceInCurrency(convertedPrice);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyRates();
  }, [currency]);

  return (
    <div className='flex flex-col items-center justify-center w-full h-[40vw] bg-black py-20'>
      <h3 className='text-white text-3xl text-center'>Our Official Channel Partners</h3>
      <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
    </div>
  );
};

export default Partners;