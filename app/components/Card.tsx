
import { Hotel } from '@/types/hotel';

interface Props {
  hotel: Hotel;
  onDetailClick: (hotel: Hotel) => void;
}
const CardPreview = ({ hotel }: { hotel: Hotel }) => {
  const { name, img, star } = hotel;

  return (
    <div className="group relative flex h-40 w-56 rounded-xl shadow-xl border-2 border-white sm:mx-auto sm:max-w-lg">
      <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200  transition duration-300 ease-in-out group-hover:brightness-100 brightness-50 dark:border-gray-700 dark:opacity-70">
        <img src={img} className="animate-fade-in block h-full w-full  scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
      </div>
      <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
        <h1 className="font-serif text-xl font-bold text-white">{name}</h1>
        <div className="flex gap-2 items-center">
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#ffff" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                stroke="#ffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{' '}
            </g>
          </svg>
          <p className="text-sm font-medium text-gray-200 shadow-xl">{star}</p>
        </div>
      </div>
    </div>
  );
};

const CardDetail: React.FC<Props> = ({ hotel, onDetailClick }) => {
  const { name, img, star, price } = hotel;
  const handleClick = () => {
    onDetailClick(hotel);
  };
  return (
    <div className=" flex flex-col md:flex-row   md:space-y-0 rounded-xl   sm:mx-auto sm:max-w-lg  border border-white bg-white">
      <div className="w-full md:w-1/3 h-full bg-white grid place-items-center">
        <img src={img} alt="tailwind logo" className="rounded-sm object-cover h-full object-center" />
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col  p-3">
        <h3 className="font-medium text-gray-800  text-sm">{name}</h3>
        <div className="flex  items-center">
          <svg width="15px" height="15px" viewBox="0 0 24 24" fill="#AEDEFC" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                stroke="#AEDEFC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{' '}
            </g>
          </svg>
          <p className="text-[10px] font-[10px] text-black shadow-xl">{star}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs font-bold text-gray-800">
            ${price}
            <span className="font-normal text-gray-600 text-[10px]">/night</span>
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-2  text-[10px] font-medium  text-white whitespace-no-wrap bg-[#222c40] border-[#222c40] rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            data-rounded="rounded-md"
            data-primary="blue-600"
            data-primary-reset="{}"
            onClick={handleClick}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export { CardDetail, CardPreview };
