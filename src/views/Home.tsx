/* eslint-disable @typescript-eslint/no-shadow */
import { Value } from 'classnames';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { ActionMeta, OnChangeValue } from 'react-select';
import * as Yup from 'yup';

import InputFile from '@/components/UI/Form/InputFile';
import InputSelect from '@/components/UI/Form/InputSelect';
import InputSelectCreate from '@/components/UI/Form/InputSelectCreate';
import InputText from '@/components/UI/Form/InputText';
import InputTextArea from '@/components/UI/Form/InputTextArea';
import Timeline from '@/components/UI/Timeline';
import { getProvinces, getDistricts, getRegencies, getVillages } from '@/store/dropdownSlice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setPreviewData } from '@/store/previewSlice';
import ConstantTimeline from '@/utils/ContantsTimeLine';
import { initialValuesFormData } from '@/utils/InitialValues';
import { ListReason } from '@/utils/list-data';

const schemaFormUser = Yup.object().shape({
  name: Yup.string().required('Nama tidak boleh kosong'),
  nik: Yup.number().required('NIK tidak boleh kosong').min(16, 'NIK harus 16 karakter'),
  no_kk: Yup.number().required('Nomor KK tidak boleh kosong').min(16, 'Nomor KK harus 16 karakter'),
  img_ktp: Yup.string().required('Foto KTP tidak boleh kosong'),
  img_kk: Yup.string().required('Foto KK tidak boleh kosong'),
  age: Yup.number().required('Umur tidak boleh kosong'),
  gender: Yup.string().required('Jenis Kelamin tidak boleh kosong'),
  province: Yup.string().required('Provinsi tidak boleh kosong'),
  regency: Yup.string().required('Kabupaten tidak boleh kosong'),
  district: Yup.string().required('Kecamatan tidak boleh kosong'),
  village: Yup.string().required('Desa tidak boleh kosong'),
  address: Yup.string().required('Alamat tidak boleh kosong'),
  rt: Yup.number().required('RT tidak boleh kosong'),
  rw: Yup.number().required('RW tidak boleh kosong'),
  income_before_pandemic: Yup.number().required('Pendapatan sebelum pandemi tidak boleh kosong'),
  income_after_pandemic: Yup.number().required('Pendapatan setelah pandemi tidak boleh kosong'),
  reason: Yup.string().required('Alasan membutuhkan bantuan tidak boleh kosong'),
});

export default function Home(): JSX.Element {
  const dispatch = useAppDispatch();

  const provincesList = useAppSelector((state) => state.dropdown.data.provinces);
  const regenciesList = useAppSelector((state) => state.dropdown.data.regencies);
  const districtsList = useAppSelector((state) => state.dropdown.data.districts);
  const villagesList = useAppSelector((state) => state.dropdown.data.villages);

  const [selectProvince, setSelectProvince] = useState<string | undefined>(undefined);
  const [selectRegency, setSelectRegency] = useState<string | undefined>(undefined);
  const [selectDistrict, setSelectDistrict] = useState<string | undefined>(undefined);
  const [selectVillage, setSelectVillage] = useState<string | undefined>(undefined);
  const [agreement, setAgreement] = useState<boolean>(false);

  const formikFormData = useFormik({
    initialValues: initialValuesFormData,
    validationSchema: schemaFormUser,
    onSubmit: (values) => {
      dispatch(setPreviewData(values));
    },
  });

  const onChangeRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    formikFormData.setFieldValue('gender', e.target.value);
  };

  type SelectValue = {
    label: string;
    value: string;
  };

  const onChangeSelectAddress = (value: OnChangeValue<SelectValue, false>, actionMeta: ActionMeta<SelectValue>) => {
    switch (actionMeta.name) {
      case 'province':
        setSelectProvince(value?.value);
        formikFormData.setFieldValue('province', value?.label);
        dispatch(getRegencies(value?.value));
        break;
      case 'regency':
        setSelectRegency(value?.value);
        formikFormData.setFieldValue('regency', value?.label);
        dispatch(getDistricts(value?.value));
        break;
      case 'district':
        setSelectDistrict(value?.value);
        formikFormData.setFieldValue('district', value?.label);
        dispatch(getVillages(value?.value));
        break;
      case 'village':
        setSelectVillage(value?.value);
        formikFormData.setFieldValue('village', value?.label);
        break;
      default:
        break;
    }
  };

  const onChangeSelectReason = (value: OnChangeValue<SelectValue, false>, actionMeta: ActionMeta<SelectValue>) => {
    formikFormData.setFieldValue('reason', value?.label);
  };

  const onChangeImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    console.log(name, 'name');
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const file: any = e.target.files?.[0];
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    })
      .then((result) => {
        formikFormData.setFieldValue(name, result);
      })
      .catch((error) => console.log(error));
  };

  const onChangeCheckboxAgreement = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreement(e.target.checked);
  };

  console.log(formikFormData.errors, 'errors');
  // console.log(agreement, selectProvince, formikFormData.values, 'selectProvince');

  useEffect(() => {
    dispatch(getProvinces());
  }, []);

  return (
    <div className="mx-2 grid grid-cols-12 gap-2">
      <div className="col-span-12 md:col-span-4">
        <div className="w-100 rounded-md bg-white p-4 shadow-sm">
          <h3 className="text-lg font-semibold">Timeline</h3>
          <div className="p-2">
            <Timeline timelineData={ConstantTimeline} />
          </div>
        </div>
      </div>
      <div className="col-span-12  md:col-span-8">
        <div className="w-100 rounded-md bg-white p-4 shadow-sm">
          <div>
            <h1 className="text-xl font-semibold">Isi Data Diri</h1>
          </div>
          <form onSubmit={formikFormData.handleSubmit} className="mt-5">
            <InputText
              name="name"
              label="Nama"
              placeholder="Nama Lengkap"
              value={formikFormData.values.name}
              onChange={formikFormData.handleChange}
              touched={formikFormData.touched.name}
              errors={formikFormData.errors.name}
            />
            <InputText
              name="nik"
              label="NIK"
              type="number"
              placeholder="16 digit NIK"
              value={formikFormData.values.nik}
              onChange={formikFormData.handleChange}
              touched={formikFormData.touched.nik}
              errors={formikFormData.errors.nik}
              maxLength={16}
            />
            <InputText
              name="no_kk"
              label="Nomer Kartu Keluarga"
              type="number"
              placeholder="16 digit Kartu Keluarga"
              value={formikFormData.values.no_kk}
              onChange={formikFormData.handleChange}
              touched={formikFormData.touched.no_kk}
              errors={formikFormData.errors.no_kk}
              maxLength={16}
            />
            <InputFile
              name="img_ktp"
              label="Unggah Foto KTP"
              value={formikFormData.values.img_ktp}
              onChange={onChangeImageUpload}
              touched={formikFormData.touched.img_ktp}
              errors={formikFormData.errors.img_ktp}
            />
            <InputFile
              name="img_kk"
              label="Unggah Foto Kartu Keluarga"
              value={formikFormData.values.img_kk}
              onChange={onChangeImageUpload}
              touched={formikFormData.touched.img_kk}
              errors={formikFormData.errors.img_kk}
            />
            <InputText
              name="age"
              label="Umur"
              type="number"
              placeholder="Masukan umur"
              value={formikFormData.values.age}
              onChange={formikFormData.handleChange}
              touched={formikFormData.touched.age}
              errors={formikFormData.errors.age}
              maxLength={3}
            />
            <div>
              <label htmlFor="floating_input_gender" className="mb-2 block text-sm font-medium text-gray-900">
                Pilih Jenis Kelamin
              </label>
              <div className="mb-2 flex flex-row items-center space-x-5">
                <div className="flex items-center">
                  <input
                    id="gender-radio-1"
                    type="radio"
                    value="Laki-laki"
                    name="gender"
                    checked={formikFormData.values.gender === 'Laki-laki'}
                    onChange={onChangeRadioButton}
                    className="0 h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 ">
                    Laki-laki
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="gender-radio-2"
                    type="radio"
                    value="Perempuan"
                    name="gender"
                    checked={formikFormData.values.gender === 'Perempuan'}
                    onChange={onChangeRadioButton}
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900">
                    Perempuan
                  </label>
                </div>
              </div>
            </div>
            <div>
              <InputSelect
                options={provincesList}
                name="province"
                label="Provinsi"
                placeholder="Pilih Provinsi"
                touched={formikFormData.touched.province}
                errors={formikFormData.errors.province}
                onChange={onChangeSelectAddress}
              />
            </div>
            <div>
              <InputSelect
                options={regenciesList}
                name="regency"
                label="Kabupaten/Kota"
                placeholder="Pilih Kabupaten/Kota"
                touched={formikFormData.touched.regency}
                errors={formikFormData.errors.province}
                onChange={onChangeSelectAddress}
              />
            </div>
            <div>
              <InputSelect
                options={districtsList}
                name="district"
                label="Kecamatan"
                placeholder="Pilih Kecamatan"
                touched={formikFormData.touched.district}
                errors={formikFormData.errors.district}
                onChange={onChangeSelectAddress}
              />
            </div>
            <div>
              <InputSelect
                options={villagesList}
                name="village"
                label="Desa/Kelurahan"
                placeholder="Pilih Kelurahan"
                touched={formikFormData.touched.village}
                errors={formikFormData.errors.village}
                onChange={onChangeSelectAddress}
              />
            </div>
            <div>
              <InputTextArea
                name="address"
                label="Alamat"
                placeholder="Masukan Alamat Lengkap"
                value={formikFormData.values.address}
                onChange={formikFormData.handleChange}
                touched={formikFormData.touched.address}
                errors={formikFormData.errors.address}
              />
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <InputText
                  name="rt"
                  label="RT"
                  type="number"
                  placeholder="RT"
                  value={formikFormData.values.rt}
                  onChange={formikFormData.handleChange}
                  touched={formikFormData.touched.rt}
                  errors={formikFormData.errors.rt}
                  maxLength={3}
                />
              </div>
              <div className="col-span-6">
                <InputText
                  name="rw"
                  label="RW"
                  type="number"
                  placeholder="RW"
                  value={formikFormData.values.rw}
                  onChange={formikFormData.handleChange}
                  touched={formikFormData.touched.rw}
                  errors={formikFormData.errors.rw}
                  maxLength={3}
                />
              </div>
            </div>
            <InputText
              name="income_before_pandemic"
              label="Penghasilan sebelum pandemi"
              type="number"
              placeholder="Masukan penghasilan sebelum pandemi (dalam angka)"
              value={formikFormData.values.income_before_pandemic}
              onChange={formikFormData.handleChange}
              touched={formikFormData.touched.income_before_pandemic}
              errors={formikFormData.errors.income_before_pandemic}
            />
            <InputText
              name="income_after_pandemic"
              label="Penghasilan setelah pandemi"
              type="number"
              placeholder="Masukan penghasilan sesudah pandemi (dalam angka)"
              value={formikFormData.values.income_after_pandemic}
              onChange={formikFormData.handleChange}
              touched={formikFormData.touched.income_after_pandemic}
              errors={formikFormData.errors.income_after_pandemic}
            />
            <InputSelectCreate
              options={ListReason}
              name="reason"
              label="Pilih Alasan membutuhkan bantuan"
              placeholder="Pilih salah satu alasan atau ketikan alasan"
              touched={formikFormData.touched.reason}
              errors={formikFormData.errors.reason}
              onChange={onChangeSelectReason}
              helper="Pilih alasan membutuhkan bantuan atau ketik untuk membuat alasan baru"
            />
            <div className="mb-6 flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="agreement"
                  type="checkbox"
                  value=""
                  onChange={onChangeCheckboxAgreement}
                  className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300"
                  required
                />
              </div>
              <label htmlFor="agreement" className="ml-2 text-sm font-medium text-gray-900 ">
                Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan
                ketidaksesuaian dalam data tersebut.
              </label>
            </div>
            <div className="flex justify-end">
              <button disabled={!agreement} className="button-primary" type="submit">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
