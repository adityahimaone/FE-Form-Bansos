import { IInitialFormData } from '@/store/types';

import { IInitialValuesFormData } from './Types';

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
  nik: undefined,
  no_kk: undefined,
  img_ktp: '',
  img_kk: '',
  age: undefined,
  gender: 'Laki-laki',
  province: '',
  regency: '',
  district: '',
  village: '',
  address: '',
  rt: undefined,
  rw: undefined,
  income_before_pandemic: undefined,
  income_after_pandemic: undefined,
  reason: '',
};

export { initialStatePreview, initialValuesFormData };
