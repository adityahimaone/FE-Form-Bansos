import { IDropdown } from '@/store/types';

const TransformDataReactSelect = (prevData: any[]): IDropdown[] =>
  prevData.map((item: { id: string; name: string }) => ({
    value: item.id,
    label: item.name,
  }));

export default TransformDataReactSelect;
