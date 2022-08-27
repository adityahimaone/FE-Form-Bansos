export interface IDropdown {
  value: string;
  label: string;
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
