export interface IDropdown {
  value: string;
  label: string;
}

export interface IInitialFormData {
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
