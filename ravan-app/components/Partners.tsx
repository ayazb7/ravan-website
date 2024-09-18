import React, { useEffect, useState } from 'react';
import { useCurrency } from '@/context/currencyContext';

const Partners: React.FC = () => {
  const { currency } = useCurrency();
  const [priceInCurrency, setPriceInCurrency] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
    <div className='flex items-center justify-center w-full h-[30vw] bg-black py-20'>
      <h3 className='text-white text-3xl text-center'>Our Official Channel Partners</h3>
      {loading ? (
        <p className="text-white mt-5">Loading price...</p>
      ) : (
        <p className="text-white mt-5">
          Price: {priceInCurrency?.toFixed(2)} {currency}
        </p>
      )}
    </div>
  );
};

export default Partners;