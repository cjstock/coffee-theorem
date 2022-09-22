import { Dispatch } from "react";
import { ACTIONTYPE } from "../../utils/CoffeeReducer";

interface InputTextProps {
    title: string;
    id: string;
    placeholder?: string;
    type?: "text" | "email" | "url" | "number" | "search";
    dispatch: Dispatch<ACTIONTYPE>;
}
const InputText = ({
    id,
    title,
    type,
    dispatch,
    placeholder,
}: InputTextProps) => {
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
                    className={`form-input block w-full flex-1 ${
                        type === "url" ? "rounded-r-md" : "rounded-md"
                    }  text-matcha-100 bg-coffee-400 border-coffee-200 focus:border-matcha-200 focus:ring-matcha-200 sm:text-sm transition-colors`}
                    placeholder={placeholder || "Example Text"}
                    onChange={(e) =>
                        dispatch({
                            type: "HANDLE INPUT TEXT",
                            field: id,
                            payload: e.currentTarget.value,
                        })
                    }
                />
            </div>
        </div>
    );
};

export default InputText;
