import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ActionMeta, OnChangeValue } from 'react-select';
import * as Yup from 'yup';

import InputFile from '@/components/UI/Form/InputFile';
import InputRadio from '@/components/UI/Form/InputRadio';
import InputSelect from '@/components/UI/Form/InputSelect';
import InputSelectCreate from '@/components/UI/Form/InputSelectCreate';
import InputText from '@/components/UI/Form/InputText';
import InputTextArea from '@/components/UI/Form/InputTextArea';
import Spinner from '@/components/UI/Spinner';
import { getProvinces, getDistricts, getRegencies, getVillages } from '@/store/dropdownSlice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setPreviewData } from '@/store/previewSlice';
import { ConvertNumberToString } from '@/utils/helper';
import {
  initialValuesFormData,
  initImageAttribute,
  initSelectedProvince,
  initSelectedRegency,
  initSelectedDistrict,
  initSelectedVillage,
} from '@/utils/InitialValues';
import { ListReason } from '@/utils/list-data';
import { ISelectedValue, IImageAttribute } from '@/utils/Types';

const schemaFormUser = Yup.object().shape({
  name: Yup.string().required('Nama tidak boleh kosong'),
  nik: Yup.number()
    .required('Nomor NIK tidak boleh kosong')
    .positive('Nomor NIK Harus Angka Positive')
    .test(
      'nik-length',
      'NIK harus berjumlah 16 digit',
      (val: number | undefined) => ConvertNumberToString(val)?.length === 16,
    ),
  no_kk: Yup.number()
    .required('Nomor KK tidak boleh kosong')
    .positive('Nomor KK Harus Angka Positive')
    .test(
      'kk-length',
      'Nomer KK harus berjumlah 16 digit',
      (val: number | undefined) => ConvertNumberToString(val)?.length === 16,
    ),
  img_ktp: Yup.string().required('Foto KTP tidak boleh kosong'),
  img_kk: Yup.string().required('Foto KK tidak boleh kosong'),
  age: Yup.number().required('Umur tidak boleh kosong').positive('Umur Harus Angka Positive'),
  gender: Yup.string().required('Jenis Kelamin tidak boleh kosong'),
  province: Yup.string().required('Provinsi tidak boleh kosong'),
  regency: Yup.string().required('Kabupaten/Kota tidak boleh kosong'),
  district: Yup.string().required('Kecamatan tidak boleh kosong'),
  village: Yup.string().required('Desa/Kelurahan tidak boleh kosong'),
  address: Yup.string().required('Alamat tidak boleh kosong'),
  rt: Yup.number().required('RT tidak boleh kosong').positive('RT Harus Angka Positive'),
  rw: Yup.number().required('RW tidak boleh kosong').positive('RW Harus Angka Positive'),
  income_before_pandemic: Yup.number().required('Pendapatan sebelum pandemi tidak boleh kosong'),
  income_after_pandemic: Yup.number().required('Pendapatan setelah pandemi tidak boleh kosong'),
  reason: Yup.string().required('Alasan membutuhkan bantuan tidak boleh kosong'),
});

export default function Index(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const provincesList = useAppSelector((state) => state.dropdown.data.provinces);
  const regenciesList = useAppSelector((state) => state.dropdown.data.regencies);
  const districtsList = useAppSelector((state) => state.dropdown.data.districts);
  const villagesList = useAppSelector((state) => state.dropdown.data.villages);

  const [, setSendStatus] = useState<string>('');
  const [loadingSendData, setLoadingSendData] = useState<boolean>(false);
  const [selectProvince, setSelectProvince] = useState<ISelectedValue>(initSelectedProvince);
  const [selectRegency, setSelectRegency] = useState<ISelectedValue>(initSelectedRegency);
  const [selectDistrict, setSelectDistrict] = useState<ISelectedValue>(initSelectedDistrict);
  const [selectVillage, setSelectVillage] = useState<ISelectedValue>(initSelectedVillage);
  const [agreement, setAgreement] = useState<boolean>(false);
  const [imageAttributeKTP, setImageAttributeKTP] = useState<IImageAttribute>(initImageAttribute);
  const [imageAttributeKK, setImageAttributeKK] = useState<IImageAttribute>(initImageAttribute);

  const formikFormData = useFormik({
    initialValues: initialValuesFormData,
    validationSchema: schemaFormUser,
    onSubmit: (values) => {
      setLoadingSendData(true);
      const random = Math.random();
      if (imageAttributeKTP?.size > 2000000) {
        toast.error(`Ukuran file gambar KTP terlalu besar`);
        setLoadingSendData(false);
        return;
      }
      if (imageAttributeKK?.size > 2000000) {
        toast.error(`Ukuran file gambar KK terlalu besar`);
        setLoadingSendData(false);
        return;
      }
      if (random > 0.5) {
        toast.success('Berhasil mengirim data');
        const nav = setTimeout(() => {
          setSendStatus('success');
          setLoadingSendData(false);
          dispatch(setPreviewData(values));
          navigate('/preview');
          window.scrollTo(0, 0);
          clearTimeout(nav);
        }, 1500);
        return;
      }
      toast.error('Gagal mengirim data: Interval Server Error');
      const nav = setTimeout(() => {
        setSendStatus('failed');
        setLoadingSendData(false);
        clearTimeout(nav);
      }, 1500);
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
        setSelectProvince({ value: value?.value, label: value?.label });
        formikFormData.setFieldValue('province', value?.label);
        dispatch(getRegencies(value?.value));
        break;
      case 'regency':
        setSelectRegency({ value: value?.value, label: value?.label });
        formikFormData.setFieldValue('regency', value?.label);
        dispatch(getDistricts(value?.value));
        break;
      case 'district':
        setSelectDistrict({ value: value?.value, label: value?.label });
        formikFormData.setFieldValue('district', value?.label);
        dispatch(getVillages(value?.value));
        break;
      case 'village':
        setSelectVillage({ value: value?.value, label: value?.label });
        formikFormData.setFieldValue('village', value?.label);
        break;
      default:
        break;
    }
  };

  const onChangeSelectReason = (value: OnChangeValue<SelectValue, false>) => {
    formikFormData.setFieldValue('reason', value?.label);
  };

  const onChangeImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const file: any = e.target.files?.[0];
      if (name === 'img_ktp') {
        setImageAttributeKTP({
          name: file?.name,
          size: file?.size,
        });
      }
      if (name === 'img_kk') {
        setImageAttributeKK({
          name: file?.name,
          size: file?.size,
        });
      }
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

  useEffect(() => {
    dispatch(getProvinces());
  }, []);

  useEffect(() => {
    formikFormData.setFieldValue('regency', '');
    formikFormData.setFieldValue('district', '');
    formikFormData.setFieldValue('village', '');
    setSelectRegency(initSelectedRegency);
    setSelectDistrict(initSelectedDistrict);
    setSelectVillage(initSelectedVillage);
  }, [selectProvince]);

  useEffect(() => {
    formikFormData.setFieldValue('district', '');
    formikFormData.setFieldValue('village', '');
    setSelectDistrict(initSelectedDistrict);
    setSelectVillage(initSelectedVillage);
  }, [selectRegency]);

  useEffect(() => {
    formikFormData.setFieldValue('village', '');
    setSelectVillage(initSelectedVillage);
  }, [selectDistrict]);

  return (
    <div className="w-100 rounded-md bg-white p-4 shadow-sm">
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <h1 className="text-xl font-semibold">Form Data Diri</h1>
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
        <div className="mb-6">
          <label htmlFor="floating_input_gender" className="mb-2 block text-sm font-medium text-gray-900">
            Pilih Jenis Kelamin
          </label>
          <div className="mb-2 flex flex-col items-start space-y-3">
            <InputRadio
              forHtml="gender-radio-1"
              name="gender"
              value="Laki-laki"
              onChange={onChangeRadioButton}
              values={formikFormData.values.gender}
            />
            <InputRadio
              forHtml="gender-radio-2"
              name="gender"
              value="Perempuan"
              onChange={onChangeRadioButton}
              values={formikFormData.values.gender}
            />
          </div>
        </div>
        <div>
          <InputSelect
            options={provincesList}
            name="province"
            label="Provinsi"
            placeholder="Pilih Provinsi"
            value={selectProvince}
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
            value={selectRegency}
            touched={formikFormData.touched.regency}
            errors={formikFormData.errors.regency}
            onChange={onChangeSelectAddress}
          />
        </div>
        <div>
          <InputSelect
            options={districtsList}
            name="district"
            label="Kecamatan"
            placeholder="Pilih Kecamatan"
            value={selectDistrict}
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
            value={selectVillage}
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
          maxLength={100}
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
          maxLength={100}
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
              id="agreement-checkbox"
              type="checkbox"
              checked={agreement}
              onChange={onChangeCheckboxAgreement}
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300"
              required
            />
          </div>
          <label htmlFor="agreement" className="ml-2 text-sm font-normal leading-relaxed text-gray-900 ">
            Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan
            ketidaksesuaian dalam data tersebut.
            <sup className="text-red-500">*</sup>
          </label>
        </div>
        <div className="flex justify-end">
          <button
            disabled={!agreement}
            className="button-primary flex items-center disabled:bg-slate-300"
            type="submit"
          >
            Kirim
            {loadingSendData ? <Spinner /> : <ArrowRightIcon className="ml-1 h-4 w-4 font-bold text-white" />}
          </button>
        </div>
      </form>
    </div>
  );
}
