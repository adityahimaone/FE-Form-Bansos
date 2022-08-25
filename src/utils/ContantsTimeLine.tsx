import { PencilSquareIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';

import { ITimline } from './Types';

const ConstantTimeline: ITimline[] = [
  {
    id: 1,
    title: 'Data Diri',
    description: 'Isi Data diri dengan lengkap',
    icon: <PencilSquareIcon className="h-4 w-4" />,
  },
  {
    id: 2,
    title: 'Preview',
    description: 'Preview Data diri',
    icon: <ClipboardDocumentCheckIcon className="h-4 w-4" />,
  },
];

export default ConstantTimeline;
