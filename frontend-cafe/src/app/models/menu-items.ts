export interface MenuOption {
  name: string;
  url: string;
  icon: string;
  subMenu?: MenuOption[];
}
