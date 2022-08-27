import Select, { ActionMeta } from 'react-select';

interface ISelectInput {
  options?: any;
  name: string;
  label: string;
  onChange: (newValue: null, actionMeta: ActionMeta<never>) => void;
  touched: boolean | undefined;
  errors: string | undefined;
}

function InputSelect({ options, name, label, onChange, touched, errors }: ISelectInput): JSX.Element {
  return (
    <div className="mb-6">
      <label htmlFor={`floating_input_${name}`} className="mb-2 block text-sm font-medium text-gray-900">
        {label}
      </label>
      <Select name={name} onChange={onChange} options={options} />
      {touched && errors ? <span className="text-xs text-red-500">{errors}</span> : null}
    </div>
  );
}

InputSelect.defaultProps = {
  options: [
    {
      value: '0',
      label: 'Pilih Provinsi',
    },
  ],
};

export default InputSelect;
