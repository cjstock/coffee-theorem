interface InputProps {
  label: string;
  label_key: string;
  value: string;
  onChange: (key: string, value: string) => void;
  disabled?: boolean;
  capitalized?: boolean;
}

const TextArea: React.FC<InputProps> = ({
  label,
  label_key,
  value,
  onChange,
  disabled,
  capitalized,
}) => {
  return (
    <label className="p-2 capitalize input-group input-group-vertical">
      <span>{label}</span>
      <textarea
        rows={4}
        className={`textarea textarea-primary text-primary leading-5 disabled:cursor-default disabled:text-primary ${
          capitalized ? "capitalize" : ""
        }`}
        disabled={disabled}
        name={label}
        value={value}
        onChange={(event) => {
          onChange(label_key, event.currentTarget.value);
        }}
      />
    </label>
  );
};

export default TextArea;
