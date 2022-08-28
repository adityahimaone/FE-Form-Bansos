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
  nik: number | undefined;
  no_kk: number | undefined;
  img_ktp: string;
  img_kk: string;
  age: number | undefined;
  gender: string;
  province: string;
  regency: string;
  district: string;
  village: string;
  address: string;
  rt: number | undefined;
  rw: number | undefined;
  income_before_pandemic: number | undefined;
  income_after_pandemic: number | undefined;
  reason: string;
}

export type { ITimline, ITimelineArray, IInitialValuesFormData };
