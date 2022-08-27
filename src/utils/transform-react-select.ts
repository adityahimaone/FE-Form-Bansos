import { IProvince } from '@/store/types';

const TransformDataReactSelect = (prevData: any[]): IProvince[] =>
  prevData.map((item: { id: string; name: string }) => ({
    value: item.id,
    label: item.name,
  }));

export default TransformDataReactSelect;
