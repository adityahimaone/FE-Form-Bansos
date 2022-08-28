import classNames from 'classnames';

interface ITextInput {
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  touched: boolean | undefined;
  errors: string | undefined;
}

function TextInput({ type, name, label, placeholder, maxLength, onChange, value, touched, errors }: ITextInput) {
  return (
    <div className="mb-6">
      <label htmlFor={`floating_input_${name}`} className="mb-2 block text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={`text_input_${name}`}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder={placeholder}
        onKeyPress={
          type === 'number'
            ? (event: React.KeyboardEvent<HTMLInputElement>) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }
            : undefined
        }
      />
      {touched && errors ? <span className="text-xs text-red-500">{errors}</span> : null}
    </div>
  );
}

TextInput.defaultProps = {
  type: 'text',
  value: '',
  placeholder: 'Ketikan Inputan',
  maxLength: undefined,
  onChange: () => {},
};

export default TextInput;
