

interface InputProps {
    label: string,
    value: string,
    onChange: (str:string) => void,
    disabled?: boolean
    capitalized?: boolean
}

const TextArea:React.FC<InputProps> = ({label, value, onChange, disabled, capitalized}) => {

    return (
        <label className="p-2 input-group input-group-vertical capitalize">
            <span>{label}</span>
            <textarea
            className={`textarea textarea-primary leading-10 disabled:cursor-default ${capitalized ? "capitalize" : ""}`}
            disabled={disabled}
            name={label}
            value={value}
            onChange={(event) => onChange(event.currentTarget.value)} />
        </label>
    )
}

export default TextArea