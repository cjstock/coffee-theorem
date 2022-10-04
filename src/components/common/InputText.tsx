import { Dispatch } from "react";
import { ACTIONTYPE } from "../../utils/CoffeeReducer";

interface InputTextProps {
    title: string;
    id: string;
    value: string | number
    placeholder?: string;
    type?: "text" | "email" | "url" | "search";
    dispatch: Dispatch<ACTIONTYPE>;
}
const InputText = ({
    id,
    title,
    type,
    value,
    dispatch,
    placeholder,
}: InputTextProps) => {
    let roundedClass = "";
    if (type === "url") {
        roundedClass = "rounded-r-md";
    } else if (id === "altitude") {
        roundedClass = "rounded-l-md";
    } else {
        roundedClass = "rounded-md";
    }
    return (
        <div className="col-span-3 sm:col-span-2">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-matcha-100"
            >
                {title}
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
                {type === "url" && (
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-coffee-200 bg-coffee-300 px-3 text-sm text-coffee-100">
                        http://
                    </span>
                )}
                <input
                    type={type || "text"}
                    name={id}
                    id={id}
                    value={value}
                    className={`form-input block w-full flex-1 ${roundedClass} text-matcha-100 bg-coffee-400 border-coffee-200 focus:border-coffee-100 focus:ring-coffee-100 sm:text-sm transition-colors`}
                    placeholder={placeholder || ""}
                    onChange={(e) =>
                        dispatch({
                            type: "HANDLE INPUT TEXT",
                            field: id,
                            payload: e.currentTarget.value,
                        })
                    }
                />
                {id === "altitude" && (
                    <span
                        className="inline-flex items-center rounded-r-md border border-l-0 border-coffee-200 bg-coffee-300 px-3 text-coffee-100 sm:text-sm"
                        id="altitude-meters"
                    >
                        Meters (above sea level)
                    </span>
                )}
            </div>
        </div>
    );
};

export default InputText;
