import { IListHeader, IListReason } from './Types';

export const ListReason: IListReason[] = [
  {
    value: '1',
    label: 'Kehilangan pekerjaan',
  },
  {
    value: '2',
    label: 'Kepala keluarga terdampak atau korban Covid-19',
  },
  {
    value: '3',
    label: 'Tergolong fakir/miskin semenjak sebelum Covid-19',
  },
];

export const listHeader: IListHeader[] = [
  {
    id: 1,
    label: 'Home',
    url: '/',
  },
  {
    id: 2,
    label: 'About',
    url: '/about',
  },
];
