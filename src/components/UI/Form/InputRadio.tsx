interface IRadioInput {
  forHtml: string;
  name: string;
  value: string;
  values: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputRadio({ forHtml, name, value, values, onChange }: IRadioInput): JSX.Element {
  return (
    <div className="flex items-center">
      <input
        id={forHtml}
        type="radio"
        value={value}
        name={name}
        checked={values === value}
        onChange={onChange}
        className="0 h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor={forHtml} className="ml-2 text-sm font-medium text-gray-900">
        {value}
      </label>
    </div>
  );
}

export default InputRadio;
