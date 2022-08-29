import { PencilSquareIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';

import { ITimline } from './Types';

const ConstantTimeline: ITimline[] = [
  {
    id: 1,
    title: 'Form Data Diri',
    url: '/',
    description: 'Isi data diri warga',
    icon: <PencilSquareIcon className="h-4 w-4" />,
  },
  {
    id: 2,
    title: 'Pratinjau',
    description: 'Pratinjau hasil dari data diri warga',
    url: '/preview',
    icon: <ClipboardDocumentCheckIcon className="h-4 w-4" />,
  },
];

export default ConstantTimeline;
