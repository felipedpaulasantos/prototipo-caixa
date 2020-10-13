export interface AccordionMenu {
  name: string;
  iconClass?: string;
  active?: boolean;
  url?: string;
  onClick?: Function;
  submenu?: AccordionMenu[];
}
