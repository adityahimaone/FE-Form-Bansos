import { ActionMeta } from 'react-select';
import CreatableSelect from 'react-select/creatable';

interface ISelectCreateableInput {
  options?: any;
  name: string;
  label: string;
  placeholder?: string;
  onChange: (newValue: null, actionMeta: ActionMeta<never>) => void;
  touched: boolean | undefined;
  errors: string | undefined;
  helper?: string;
}

const customStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: 'rgb(249 250 251)',
    borderColor: 'rgb(209 213 219)',
    borderRadius: 8,
  }),
};

function InputSelectCreate({
  options,
  name,
  label,
  placeholder,
  onChange,
  touched,
  errors,
  helper,
}: ISelectCreateableInput) {
  return (
    <div className="mb-6">
      <label htmlFor={`floating_input_${name}`} className="mb-2 block text-sm font-medium text-gray-900">
        {label}
        <sup className="text-red-500">*</sup>
      </label>
      <CreatableSelect
        isClearable
        styles={customStyles}
        placeholder={placeholder}
        onChange={onChange}
        options={options}
      />
      <p id="helper-text-explanation" className="d mt-2 text-xs font-thin text-gray-500">
        {helper}
      </p>
      {touched && errors ? <span className="text-xs text-red-500">{errors}</span> : null}
    </div>
  );
}

InputSelectCreate.defaultProps = {
  options: [
    {
      value: '0',
      label: 'Pilih Alasan',
    },
  ],
  placeholder: 'Pilih salah satu',
  helper: 'Pilih salah satu atau ketik untuk membuat daftar baru',
};

export default InputSelectCreate;
