import { Bean } from ".prisma/client"
import { InputHTMLAttributes } from "react"

interface InputProps {
    label: string,
    value: string,
    onChange: (str:string) => void,
    disabled?: boolean
}

const Input:React.FC<InputProps> = ({label, value, onChange, disabled}) => {

    return (
        <label className="p-2 input-group input-group-vertical" htmlFor="country-input">
            <span>{label}</span>
            <input className="input input-primary input-sm disabled:cursor-default" id="country-input" disabled={disabled} name={label} value={value} onChange={(event) => onChange(event.currentTarget.value)} />
        </label>
    )
}

export default Input