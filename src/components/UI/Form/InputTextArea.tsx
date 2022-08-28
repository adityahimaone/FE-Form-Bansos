import classNames from 'classnames';

interface ITextAreaInput {
  name: string;
  label: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  touched: boolean | undefined;
  errors: string | undefined;
}

function InputTextArea({
  name,
  label,
  placeholder,
  maxLength,
  onChange,
  value,
  touched,
  errors,
}: ITextAreaInput): JSX.Element {
  const classTextArea = classNames(
    'block w-full rounded-lg border p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500',
    {
      'border-gray-300 bg-gray-50': !touched && !errors,
      'border-red-500 bg-red-50': touched && errors,
    },
  );
  return (
    <div className="mb-6">
      <label htmlFor={`text_area_input_${name}`} className="mb-2 block text-sm font-medium text-gray-900">
        {label}
        <sup className="text-red-500">*</sup>
      </label>
      <textarea
        name={name}
        id={`text_area_input_${name}`}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        className={classTextArea}
        placeholder={placeholder}
        rows={3}
      />
      {touched && errors ? <span className="text-xs text-red-500">{errors}</span> : null}
    </div>
  );
}

InputTextArea.defaultProps = {
  value: '',
  placeholder: 'Ketikan Inputan',
  maxLength: 255,
  onChange: () => {},
};

export default InputTextArea;
