export type Menu = {
  id: number;
  icon: string;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
