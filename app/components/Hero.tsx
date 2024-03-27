// Di bawah suitable option nanti hasil pencarian

//sedangkan di bagian satu lagi itu bukan hasil pencarian namun memnag default dari kita, dan bagian ini juga yang bakal di tampilin di gambar waktu di tekan detail

/*
MASLAH 
- white space banyak itu karena kita g set overflow-y-hidden
- maslahnya kita g bisa pake stcicky klo ada fle atau overflow-hidden

- masah g atu caranya , padaha dh coba min-h atau max-h
- g tau apa yg terjadi klo ada kontent tambaha 

*/
import TodayDate from './TodayDate';

const Hero = () => {
  return (
    <div className="relative bg-white my-4 w-full rounded-md items-center h-full  px-6 ">
      {/* booking */}
      <div className="relative -left-2 bg-[#f4f6f9] rounded-md w-full md:w-2/3 py-2 h-auto overflow-y-hidden ">
        <div className="flex flex-wrap flex-col gap-2">
          <div className="mx-4 ">
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
            <div className="mt-4 w-full sm:mx-auto lg:mx-0">
              <div className="gap-1 flex ">
                <div className="rounded-l-lg  flex flex-col py-2  text-black">
                  <label className="py-2 text-[10px] ">City or Hotel</label>
                  <input
                    className="peer w-full h-full bg-white text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  border focus:border-2  text-sm px-3 py-2 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder="Hotel"
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
              </div>
            </div>

            <div className="w-full sm:mx-auto lg:mx-0 mt-4">
              <div>
                <p className="text-2xl text-gray-900 font-semibold pt-2">Suitable options</p>
                <span className="text-black text-sm">Recomenned hotel in area</span>
              </div>
              <div className="grid gap-2 md:grid-cols-3">
                <div className="group relative m-0 flex h-56 w-56 rounded-xl shadow-xl border-2 border-white sm:mx-auto sm:max-w-lg">
                  <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                    <img
                      src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80"
                      className="animate-fade-in block h-full w-full  scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </div>
                  <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                    <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Azores</h1>
                    <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
                  </div>
                </div>
                <div className="group relative m-0 flex h-56 w-56 rounded-xl shadow-xl border-2 border-white sm:mx-auto sm:max-w-lg">
                  <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                    <img
                      src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80"
                      className="animate-fade-in block h-full w-full  scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </div>
                  <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                    <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Azores</h1>
                    <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
                  </div>
                </div>
                <div className="group relative m-0 flex h-56 w-56 rounded-xl shadow-xl border-2 border-white sm:mx-auto sm:max-w-lg">
                  <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                    <img
                      src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80"
                      className="animate-fade-in block h-full w-full  scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </div>
                  <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                    <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Azores</h1>
                    <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
                  </div>
                </div>

                {/* card 2 */}
              </div>
              {/* isinya */}
            </div>

            {/* bagian filter, jika ditekan akan nampilin gambar */}
            <div className="w-full sm:mx-auto lg:mx-0 mt-4">
              <div>
                <p className="text-2xl text-gray-900 font-semibold pt-2">Our Recomendation</p>
                <span className="text-black text-sm">Recomenned hotel in area</span>
              </div>
              <div className="grid  gap-2  md:grid-cols-2  ">
                {/* card 1 */}
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl  px-3 max-w-xs  border border-white bg-white">
                  <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" className="rounded-xl " />
                  </div>
                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <h3 className="font-black text-gray-800  text-base">The Majestic and Wonderful Bahamas</h3>

                    <p className="text-xl font-black text-gray-800">
                      $110
                      <span className="font-normal text-gray-600 text-base">/night</span>
                    </p>
                  </div>
                </div>
                {/* card 2 */}
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl  px-3 max-w-xs   border border-white bg-white">
                  <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" className="rounded-xl " />
                  </div>
                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <h3 className="font-black text-gray-800  text-base">The Majestic and Wonderful Bahamas</h3>

                    <p className="text-xl font-black text-gray-800">
                      $110
                      <span className="font-normal text-gray-600 text-base">/night</span>
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl  px-3 max-w-xs   border border-white bg-white">
                  <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" className="rounded-xl " />
                  </div>
                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <h3 className="font-black text-gray-800  text-base">The Majestic and Wonderful Bahamas</h3>

                    <p className="text-xl font-black text-gray-800">
                      $110
                      <span className="font-normal text-gray-600 text-base">/night</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gambar hotel */}
      <div className="bg-red-600 sticky bottom-0 left-[100%] rounded-md w-full top-0 md:w-1/3 h-screen">
        <img src="https://source.unsplash.com/7H77FWkK_x4/1600x900" className="h-full object-cover rounded-md w-full" alt="" />
      </div>
    </div>
  );
};

export default Hero;

/*


*/
