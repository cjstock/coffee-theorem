
interface InputProps {
    label: string,
    label_key: string,
    value: string,
    onChange: (key: string, value: string | boolean) => void,
    disabled?: boolean,
    type?: string
    capitalized?: boolean
}

const Input: React.FC<InputProps> = ({ label, label_key, value, onChange, disabled, type, capitalized }) => {

    return (
        <label className="p-2 input-group input-group-vertical capitalize not-prose">
            <span>{label}</span>
            <input className={`input input-primary input-sm not-prose disabled:cursor-default ${capitalized ? "capitalize" : ""}`}
                type={type || "text"}
                disabled={disabled}
                name={label}
                value={value}
                onChange={(event) => {
                    onChange(label_key, event.currentTarget.value)
                }} />
        </label>
    )
}

export default Input