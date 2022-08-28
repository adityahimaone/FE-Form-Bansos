/* eslint-disable import/prefer-default-export */
interface ITimline {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

interface ITimelineArray {
  [index: number]: ITimline;
}

interface IInitialValuesFormData {
  name: string;
  nik: string;
  no_kk: string;
  img_ktp: string;
  img_kk: string;
  age: string;
  gender: string;
  province: string;
  regency: string;
  district: string;
  village: string;
  address: string;
  rt: string;
  rw: string;
  income_before_pandemic: string;
  income_after_pandemic: string;
  reason: string;
}

export type { ITimline, ITimelineArray, IInitialValuesFormData };
