'use client';
import TodayDate from './TodayDate';
import React from 'react';
import { CardDetail, CardPreview } from './Card';
import HotelData from './hotelData';
import { useState, useEffect } from 'react';
import { Hotel } from '@/types/hotel';

const Hero = () => {
  const [searchLocation, setSearchLocation] = useState('bali');
  const [searchResult, setSearchResult] = useState<Hotel[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [currentHotelImg, setCurrentHotelImg] = useState<string>('https://images.unsplash.com/photo-1602693680203-a01c07f9dfae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

  const changeImage = (newHotelData: Hotel) => {
    setCurrentHotelImg(newHotelData.img);
  };

  //set default card in bali
  useEffect(() => {
    const defaultResult = HotelData.filter((hotel) => hotel.location.toLowerCase() === 'bali');
    setSearchResult(defaultResult.slice(0, 3));
  }, []);

  //display card where location === seach, and just display 3 data
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = HotelData.filter((hotel) => hotel.location.toLowerCase() === searchLocation.toLowerCase());
    // setSearchResult(result.slice(0, 3));
    if (result.length > 0) {
      setNotFound(false); // Reset notFound state if results are found
      setSearchResult(result.slice(0, 3));
    } else {
      setNotFound(true); // Set notFound state to true if no results are found
      setSearchResult([]); // Clear search result
    }
  };

  //search locatipn
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLocation(e.target.value);
  };
  return (
    <div className="relative bg-white my-4  rounded-md items-center   px-6 ">
      {/* booking */}
      <div className="relative -left-2 bg-[#f4f6f9] h-[100vh] flex flex-col overflow-y-scroll gap-2 2xl:gap-4 flex-wrap  rounded-md  md:w-2/3 py-2 ">
        <div className="mx-4 gap-2 2xl:gap-4">
          <div className="w-full flex justify-between items-center">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="me-2">
                <a href="#" className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" aria-current="page">
                  Hotel
                </a>
              </li>
              <li className="me-2">
                <a href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                  House
                </a>
              </li>

              <li>
                <a className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">Village</a>
              </li>
            </ul>
            <TodayDate />
          </div>

          <div className=" w-full sm:mx-auto lg:mx-0">
            <form className="gap-1 flex " onSubmit={handleSearch}>
              <div className="rounded-l-lg  flex flex-col py-2  text-black">
                <label className="py-2 text-[10px] ">City or Hotel</label>
                <input
                  className="peer w-full h-full bg-white text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  border focus:border-2  text-sm px-3 py-2 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder="Hotel"
                  value={searchLocation}
                  onChange={handleLocationChange}
                />
              </div>
              <div className="rounded-l-lg  flex flex-col py-2  text-black">
                <label className="py-2 text-[10px] ">Check-in</label>
                <input
                  className="peer w-full h-full bg-white text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  border focus:border-2  text-sm px-3 py-2 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  type="date"
                />
              </div>
              <div className="rounded-l-lg  flex flex-col py-2  text-black">
                <label className="py-2 text-[10px] ">Check-out</label>
                <input
                  className="peer w-full h-full bg-white text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  border focus:border-2  text-sm px-3 py-2 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  type="date"
                />
              </div>
              <div className="rounded-l-lg  flex flex-col py-2  text-black">
                <label className="py-2 text-[10px] ">Guest</label>
                <input
                  className="peer w-full h-full bg-white text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  border focus:border-2  text-sm px-3 py-2 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder="Total guest"
                  type="number"
                />
              </div>
              <div className="rounded-lg  hover:opacity-80 flex flex-col item-center justify-center   text-black">
                <label className="py-2 text-[10px] ">submit</label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-2 h-10 text-[10px] font-medium  text-white whitespace-no-wrap bg-primary border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  data-rounded="rounded-md"
                  data-primary="blue-600"
                  data-primary-reset="{}"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="w-full sm:mx-auto lg:mx-0 ">
            <div>
              <p className="text-lg text-gray-900 font-semibold pt-2">Suitable options</p>
              <span className="text-black text-sm">Recomenned hotel in area</span>
            </div>
            <div className="grid gap-2 md:grid-cols-3">
              {/* {HotelData.slice(0, 3).map((hotel, index) => (
                  <CardPreview key={index} hotel={hotel} />
                ))} */}

              {notFound ? <p className=" text-black my-10">Hotel not found ...</p> : searchResult.map((hotel, index) => <CardPreview key={index} hotel={hotel} />)}
            </div>
          </div>

          
          <div className="w-full sm:mx-auto lg:mx-0 ">
            <div>
              <p className="text-lg text-gray-900 font-semibold pt-2">Our Recomendation</p>
              <span className="text-black text-sm">Recomenned hotel in area</span>
            </div>
            <div className="grid  gap-3  md:grid-cols-2  ">
              {HotelData.slice(0, 4).map((hotel, index) => (
                <CardDetail key={index} hotel={hotel} onDetailClick={changeImage} />
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-white absolute bottom-0 right-1 rounded-md w-full top-0 md:w-1/3 h-[100vh]">
        <img src={currentHotelImg} className="h-full object-cover rounded-md w-full" alt="" />
      </div>
    </div>
  );
};

export default Hero;

