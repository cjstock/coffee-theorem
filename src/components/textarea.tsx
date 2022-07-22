

interface InputProps {
    label: string,
    value: string,
    onChange: (str:string) => void,
    disabled?: boolean
}

const TextArea:React.FC<InputProps> = ({label, value, onChange, disabled}) => {

    return (
        <label className="p-2 input-group input-group-vertical">
            <span>{label}</span>
            <textarea className="textarea textarea-primary leading-10 disabled:cursor-default" disabled={disabled} name={label} value={value} onChange={(event) => onChange(event.currentTarget.value)} />
        </label>
    )
}

export default TextArea