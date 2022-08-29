interface IPreviewDataImg {
  url: string;
  label: string;
}
function PreviewDataImg({ url, label }: IPreviewDataImg) {
  return (
    <div className="mb-3 grid grid-cols-12">
      <div className="col-span-12 text-base font-semibold md:col-span-4">{label}</div>
      <div className="col-auto hidden justify-end text-base md:flex"> :&nbsp; </div>
      <div className="col-span-12 text-gray-500 md:col-span-6">
        <img src={url} className="h-36 w-72 rounded-md border-4 border-slate-100 object-fill" alt={label} />
      </div>
    </div>
  );
}

export default PreviewDataImg;
