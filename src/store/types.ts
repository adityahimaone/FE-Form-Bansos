export interface IProvince {
  id: string;
  name: string;
}

export interface IInitialStateProvince {
  loading: boolean;
  data: {
    provinces: IProvince[];
  };
  error: string | null;
}
