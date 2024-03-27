import { Menu } from '@/types/menu';

const menuData: Menu[] = [
  {
    id: 1,
    icon: '/svg/map.svg',
    title: 'Home',
    newTab: false,
    path: '/',
  },
  {
    id: 2,
    icon: '/svg/box.svg',
    title: 'Features',
    newTab: false,
    path: '/#features',
  },
  {
    id: 2.1,
    icon: '/svg/info.svg',
    title: 'Blog',
    newTab: false,
    path: '/blog',
  },
  {
    id: 2.3,
    icon: '/svg/setting.svg',
    title: 'Docs',
    newTab: false,
    path: '/docs',
  },

];

export default menuData;
