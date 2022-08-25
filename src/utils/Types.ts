/* eslint-disable import/prefer-default-export */
interface ITimline {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

// interface ITimeline Array
interface ITimelineArray {
  [index: number]: ITimline;
}

export type { ITimline, ITimelineArray };
