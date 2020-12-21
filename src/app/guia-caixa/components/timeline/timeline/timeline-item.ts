export interface TimelineItem {
   title: string;
   dateText: string;
   state: string;
}

export enum TimelineItemState {
   SUCCESS = "success",
   WARNING = "warning",
   ERROR = "danger"
}
