import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import * as Yup from 'yup';

import InputFile from '@/components/UI/Form/InputFile';
import InputSelect from '@/components/UI/Form/InputSelect';
import InputText from '@/components/UI/Form/InputText';
import Timeline from '@/components/UI/Timeline';
import { getProvinces, getDistricts, getRegencies, getVillages } from '@/store/dropdownSlice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import ConstantTimeline from '@/utils/ContantsTimeLine';

const schemaFormUser = Yup.object().shape({
  name: Yup.string().required('Nama tidak boleh kosong'),
  nik: Yup.number().required('NIK tidak boleh kosong').max(16, 'NIK tidak boleh lebih dari 16 karakter'),
  no_kk: Yup.number().required('Nomor KK tidak boleh kosong').max(16, 'Nomor KK tidak boleh lebih dari 16 karakter'),
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

const initialValuesFormData = {
  name: '',
  nik: '',
  no_kk: '',
  img_ktp: '',
  img_kk: '',
  age: '',
  gender: '',
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

function Home(): JSX.Element {
  const dispatch = useAppDispatch();

  const provincesList = useAppSelector((state) => state.dropdown.data.provinces);
  const regenciesList = useAppSelector((state) => state.dropdown.data.regencies);
  const districtsList = useAppSelector((state) => state.dropdown.data.districts);
  const villagesList = useAppSelector((state) => state.dropdown.data.villages);

  const [selectProvince, setSelectProvince] = useState<string>('0');
  const [selectRegency, setSelectRegency] = useState<string>('0');
  const [selectDistrict, setSelectDistrict] = useState<string>('0');
  const [selectVillage, setSelectVillage] = useState<string>('0');

  const formikFormData = useFormik({
    initialValues: initialValuesFormData,
    validationSchema: schemaFormUser,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const onChangeSelectProvince = (selectedOptions: any) => {
    setSelectProvince(selectedOptions.value);
    formikFormData.setFieldValue('province', selectedOptions.label);
  };

  const onChangeSelectRegency = (selectedOptions: any) => {
    setSelectRegency(selectedOptions.value);
    formikFormData.setFieldValue('regency', selectedOptions.label);
  };

  const onChangeSelectDistrict = (selectedOptions: any) => {
    setSelectDistrict(selectedOptions.value);
    formikFormData.setFieldValue('district', selectedOptions.label);
  };

  const onChangeSelectVillage = (selectedOptions: any) => {
    setSelectVillage(selectedOptions.value);
    formikFormData.setFieldValue('village', selectedOptions.label);
  };

  console.log(selectProvince, formikFormData.values, 'selectProvince');

  useEffect(() => {
    dispatch(getProvinces());
  }, []);

  useEffect(() => {
    dispatch(getRegencies(selectProvince));
  }, [selectProvince]);

  useEffect(() => {
    dispatch(getDistricts(selectRegency));
  }, [selectRegency]);

  useEffect(() => {
    dispatch(getVillages(selectDistrict));
  }, [selectDistrict]);

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
              value={formikFormData.values.name}
              onChange={formikFormData.handleChange}
              touched={formikFormData.touched.name}
              errors={formikFormData.errors.name}
            />
            <InputText
              name="nik"
              label="NIK"
              type="number"
              value={formikFormData.values.nik}
              onChange={formikFormData.handleChange}
              touched={formikFormData.touched.nik}
              errors={formikFormData.errors.nik}
              maxLength={16}
            />
            <InputText
              name="no_kk"
              label="Nomor Kartu Keluarga"
              type="number"
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
              onChange={formikFormData.handleChange}
              touched={formikFormData.touched.img_ktp}
              errors={formikFormData.errors.img_ktp}
            />
            <InputFile
              name="img_kk"
              label="Unggah Foto Kartu Keluarga"
              value={formikFormData.values.img_kk}
              onChange={formikFormData.handleChange}
              touched={formikFormData.touched.img_kk}
              errors={formikFormData.errors.img_kk}
            />
            <div>
              <label htmlFor="floating_input_gender" className="mb-2 block text-sm font-medium text-gray-900">
                Pilih Jenis Kelamin
              </label>
              <div className="mb-2 flex flex-row items-center space-x-5">
                <div className="flex items-center">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="0 h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 ">
                    Laki-laki
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
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
                name="provinces"
                label="Pilih Provinsi"
                touched={formikFormData.touched.province}
                errors={formikFormData.errors.province}
                onChange={onChangeSelectProvince}
              />
            </div>
            <div>
              <InputSelect
                options={regenciesList}
                name="regency"
                label="Pilih Kabupaten/Kota"
                touched={formikFormData.touched.regency}
                errors={formikFormData.errors.province}
                onChange={onChangeSelectRegency}
              />
            </div>
            <div>
              <InputSelect
                options={districtsList}
                name="district"
                label="Pilih Kecamatan"
                touched={formikFormData.touched.district}
                errors={formikFormData.errors.district}
                onChange={onChangeSelectDistrict}
              />
            </div>
            <div>
              <InputSelect
                options={villagesList}
                name="village"
                label="Pilih Desa/Kelurahan"
                touched={formikFormData.touched.village}
                errors={formikFormData.errors.village}
                onChange={onChangeSelectVillage}
              />
            </div>
            <div className="flex justify-end">
              <button className="button-primary" type="submit">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
