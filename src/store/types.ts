export interface IDropdown {
  value: string;
  label: string;
}

export interface IInitialFormData {
  name: string;
  nik: number;
  no_kk: number;
  img_ktp: string;
  img_kk: string;
  age: number;
  gender: string;
  province: string;
  regency: string;
  district: string;
  village: string;
  address: string;
  rt: number;
  rw: number;
  income_before_pandemic: number;
  income_after_pandemic: number;
  reason: string;
}

export interface IInitialStateDropdown {
  loading: boolean;
  data: {
    provinces: IDropdown[];
    regencies: IDropdown[];
    districts: IDropdown[];
    villages: IDropdown[];
  };
  error: string | null;
}

export interface IInitialStatePreview {
  loading: boolean;
  data: IInitialFormData;
  error: string | null;
}
