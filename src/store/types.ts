export interface IProvince {
  value: string;
  label: string;
}

export interface IInitialStateProvince {
  loading: boolean;
  data: {
    provinces: IProvince[];
  };
  error: string | null;
}
