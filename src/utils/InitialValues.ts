import { IInitialFormData } from '@/store/types';

import { IInitialValuesFormData, ISelectedValue, IImageAttribute } from './Types';

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

const initImageAttribute: IImageAttribute = {
  name: '',
  size: 0,
};

const initSelectedProvince: ISelectedValue = {
  label: 'Pilih Provinsi',
  value: undefined,
};

const initSelectedRegency: ISelectedValue = {
  label: 'Pilih Kabupaten/Kota',
  value: undefined,
};

const initSelectedDistrict: ISelectedValue = {
  label: 'Pilih Kecamatan',
  value: undefined,
};

const initSelectedVillage: ISelectedValue = {
  label: 'Pilih Desa/Kelurahan',
  value: undefined,
};

export {
  initialStatePreview,
  initialValuesFormData,
  initImageAttribute,
  initSelectedProvince,
  initSelectedRegency,
  initSelectedDistrict,
  initSelectedVillage,
};
