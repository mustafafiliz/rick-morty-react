type Props = {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
};

const Input = ({ value, onChange, placeholder, type = "text" }: Props) => {
  return (
    <input
      className="w-full p-2 rounded-lg bg-gray-50 border border-gray-300 outline-none text-sm"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
