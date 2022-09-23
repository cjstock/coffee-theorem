import { Dispatch } from "react";
import { ACTIONTYPE } from "../../utils/CoffeeReducer";

interface TextAreaProps {
    title: string;
    id: string;
    placeholder?: string;
    dispatch: Dispatch<ACTIONTYPE>;
}
const TextArea = ({ id, title, dispatch, placeholder }: TextAreaProps) => {
    return (
        <div className="col-span-3 sm:col-span-2">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-matcha-100"
            >
                {title}
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
                <textarea
                    name={id}
                    id={id}
                    rows={3}
                    className={`form-input block w-full flex-1 rounded-md text-matcha-100 bg-coffee-400 border-coffee-200 focus:border-matcha-200 focus:ring-matcha-200 sm:text-sm transition-colors`}
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

export default TextArea;
