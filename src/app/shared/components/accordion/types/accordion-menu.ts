export interface AccordionMenu {
  name: string;
  url: string;
  isLink: boolean;
  iconClass?: string;
  active?: boolean;
  enabled?: boolean;
  onClick?: Function;
  submenu?: AccordionMenu[];
}
