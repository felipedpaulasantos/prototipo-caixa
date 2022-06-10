export interface TabberItem {
   title: string;
   icon: string;
   data?: any;
   state?: TabberItemState | string;
}

export enum TabberItemState {
   SUCCESS = "success",
   WARNING = "warning",
   ERROR = "error"
}
