'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import menuData from './menuData';
import User from './User';

const Header = () => {
  const router = useRouter();
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  const handleSubmenu = (index: any) => {
    //fungsi yng ngaur submenu
    if (openIndex === index) {
      //jika submenu dalam keadaan terbuka, lalu kita tekan lagi maka ...
      setOpenIndex(-1); //index akan == -1 agar submenu tertupu
    } else {
      //namun jika index == -1 , lalu kia tekan maka ...
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyMenu);
  });

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <a href="#" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
          home
        </a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          Hotel
        </a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          Villas
        </a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          blog
        </a>
      </div>
    </nav>
  );
};


export default Header;
