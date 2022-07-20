import { Bean } from ".prisma/client"
import { InputHTMLAttributes } from "react"

interface InputProps {
    label: string,
    value: string,
    onChange: (str:string) => void
}

const Input:React.FC<InputProps> = ({label, value, onChange}) => {

    return (
        <label className="p-2 input-group input-group-vertical" htmlFor="country-input">
            <span>{label}</span>
            <input className="input input-primary input-sm" id="country-input" name={label} value={value} onChange={(event) => onChange(event.currentTarget.value)} />
        </label>
    )
}

export default Input