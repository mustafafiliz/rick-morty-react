export interface Option {
  value: string;
  label: string;
}

type Props = {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
};

const SelectBox = ({ value, options, onChange }: Props) => {
  return (
    <select
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-full p-2 rounded-lg bg-gray-50 border border-gray-300 outline-none text-sm"
      value={value}
      onChange={(e) => {
        onChange(e.target.value === "DEFAULT" ? "" : e.target.value);
      }}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          selected={option.value === value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
