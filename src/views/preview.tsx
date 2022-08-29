import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

import PreviewDataImg from '@/components/UI/PreviewDataImg';
import PreviewDataText from '@/components/UI/PreviewDataText';
import { useAppSelector } from '@/store/hooks';
import { ConvertToIDR } from '@/utils/helper';

export default function Preview(): JSX.Element {
  const { data: previewData } = useAppSelector((state) => state.preview);

  return (
    <div className="w-100 rounded-md bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h1 className="text-xl font-bold">Hasil Pratinjau</h1>
      </div>
      <div>
        <PreviewDataText name={previewData.name} label="Nama" />
        <PreviewDataText name={previewData.nik} label="NIK" />
        <PreviewDataText name={previewData.no_kk} label="Nomer Kartu Keluarga" />
        <PreviewDataText name={previewData.age} label="Umur" />
        <PreviewDataText name={previewData.gender} label="Jenis Kelamin" />
        <PreviewDataText name={previewData.address} label="Alamat" />
        <PreviewDataText name={previewData.rt} label="RT" />
        <PreviewDataText name={previewData.rw} label="RW" />
        <PreviewDataText name={previewData.province} label="Provinsi" />
        <PreviewDataText name={previewData.regency} label="Kabupaten/Kota" />
        <PreviewDataText name={previewData.district} label="Kecamatan" />
        <PreviewDataText name={previewData.village} label="Desa/Kelurahan" />
        <PreviewDataText name={ConvertToIDR(previewData.income_before_pandemic)} label="Pendapatan Sebelum Pandemi" />
        <PreviewDataText name={ConvertToIDR(previewData.income_after_pandemic)} label="Pendapatan Sesudah Pandemi" />
        <PreviewDataText name={previewData.reason} label="Alasan membutuhkan bantuan" />
        <PreviewDataImg url={previewData.img_ktp} label="Foto KTP" />
        <PreviewDataImg url={previewData.img_kk} label="Foto KK" />
        <div className="flex justify-end">
          <Link to="/" className="button-primary flex items-center">
            <ArrowLeftIcon className="ml-1 h-4 w-4" />
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
}
