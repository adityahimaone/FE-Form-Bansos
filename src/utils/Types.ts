/* eslint-disable import/prefer-default-export */
interface ITimline {
  id: number;
  title: string;
  url: string;
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

interface IListReason {
  value: string;
  label: string;
}

interface IListHeader {
  id: number;
  label: string;
  url: string;
}

interface ISelectedValue {
  label: string | undefined;
  value: string | undefined;
}

interface IImageAttribute {
  name: string;
  size: number;
}

export type {
  ITimline,
  ITimelineArray,
  IInitialValuesFormData,
  IListReason,
  IListHeader,
  ISelectedValue,
  IImageAttribute,
};
