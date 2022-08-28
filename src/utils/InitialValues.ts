import { IInitialValuesFormData } from './Types';

import { IInitialFormData } from '@/store/types';

const initialStatePreview: IInitialFormData = {
  name: '',
  nik: 0,
  no_kk: 0,
  img_ktp: '',
  img_kk: '',
  age: 0,
  gender: '',
  province: '',
  regency: '',
  district: '',
  village: '',
  address: '',
  rt: 0,
  rw: 0,
  income_before_pandemic: 0,
  income_after_pandemic: 0,
  reason: '',
};

const initialValuesFormData: IInitialValuesFormData = {
  name: '',
  nik: '',
  no_kk: '',
  img_ktp: '',
  img_kk: '',
  age: '',
  gender: 'Laki-laki',
  province: '',
  regency: '',
  district: '',
  village: '',
  address: '',
  rt: '',
  rw: '',
  income_before_pandemic: '',
  income_after_pandemic: '',
  reason: '',
};

export { initialStatePreview, initialValuesFormData };
