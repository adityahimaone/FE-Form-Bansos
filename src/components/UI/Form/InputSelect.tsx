import Select, { ActionMeta } from 'react-select';

interface ISelectInput {
  options?: any;
  name: string;
  value: any;
  label: string;
  onChange: (newValue: null, actionMeta: ActionMeta<never>) => void;
  touched: boolean | undefined;
  errors: string | undefined;
  placeholder?: string;
}

const customStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: 'rgb(249 250 251)',
    borderColor: 'rgb(209 213 219)',
    borderRadius: 8,
  }),
};
function InputSelect({
  options,
  name,
  value,
  label,
  placeholder,
  onChange,
  touched,
  errors,
}: ISelectInput): JSX.Element {
  return (
    <div className="mb-6">
      <label htmlFor={`floating_input_${name}`} className="mb-2 block text-sm font-medium text-gray-900">
        {label}
        <sup className="text-red-500">*</sup>
      </label>
      <Select
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        styles={customStyles}
        value={value}
        options={options}
        isLoading={options.length === 0}
      />
      {touched && errors ? <span className="text-xs text-red-500">{errors}</span> : null}
    </div>
  );
}

InputSelect.defaultProps = {
  options: [
    {
      value: '0',
      label: 'Pilih Wilayah',
    },
  ],
  placeholder: 'Pilih salah satu',
};

export default InputSelect;
