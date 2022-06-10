export interface AccordionMenuItem {
  name: string;
  url?: string;
  iconClass?: string;
  active?: boolean;
  enabled?: boolean;
  onClick?: Function;
  order?: number;
  submenu?: AccordionMenuItem[];
}
