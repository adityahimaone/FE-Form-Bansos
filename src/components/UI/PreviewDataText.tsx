import React from 'react';

interface IPreviewDataText {
  name: string | number | undefined;
  label: string;
}

function PreviewDataText({ name, label }: IPreviewDataText) {
  return (
    <div className="mb-3 grid grid-cols-12">
      <div className="col-span-12 text-base font-semibold md:col-span-4">{label}</div>
      <div className="col-auto hidden justify-end text-base md:flex"> :&nbsp; </div>
      <div className="col-span-12 text-sm text-gray-500 md:col-span-6 md:text-base md:text-black">{name}</div>
    </div>
  );
}

export default PreviewDataText;
