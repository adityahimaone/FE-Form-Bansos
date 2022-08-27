import { IProvince } from '../store/types';

const TransformDataReactSelect = (prevData: IProvince[]) =>
  prevData.map((data) => ({
    value: data.id,
    label: data.name,
  }));
export default TransformDataReactSelect;
