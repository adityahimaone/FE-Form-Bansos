import React from 'react';

interface IInputFile {
  name: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  touched: boolean | undefined;
  errors: string | undefined;
}

function InputFile({ name, label, onChange, value, touched, errors }: IInputFile): JSX.Element {
  return (
    <div className="mb-6">
      <label htmlFor={`floating_input_${name}`} className="mb-2 block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2 flex w-full items-center justify-center">
        <label
          htmlFor="dropzone-file"
          className="dark:hover:bg-bray-800 flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="mb-3 h-10 w-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">JPG, JPEG, PNG or BMP (MAX SIZE. 2MB)</p>
          </div>
          <input
            accept="image/png, image/JPG, image/jpeg, image/bmp"
            id="dropzone-file"
            type="file"
            name={name}
            onChange={onChange}
            className="hidden"
            value={value}
          />
        </label>
      </div>
    </div>
  );
}

InputFile.defaultProps = {
  value: '',
  onChange: () => {},
};

export default InputFile;
