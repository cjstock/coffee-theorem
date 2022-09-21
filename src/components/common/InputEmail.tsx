import { Dispatch } from "react";
import { ACTIONTYPE } from "../../utils/CoffeeReducer";

interface InputEmailProps {
    title: string;
    id: string;
    dispatch: Dispatch<ACTIONTYPE>;
}
const InputEmail = ({ id, title, dispatch }: InputEmailProps) => {
    return (
        <div className="col-span-3 sm:col-span-2">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-matcha-100"
            >
                {title}
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-coffee-200 bg-coffee-300 px-3 text-sm text-coffee-100">
                    http://
                </span>
                <input
                    type="text"
                    name={id}
                    id={id}
                    className="block w-full flex-1 rounded-none rounded-r-md text-matcha-100 bg-coffee-400 border-coffee-200 focus:border-matcha-200 focus:ring-matcha-200 sm:text-sm"
                    placeholder="www.example.com"
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

export default InputEmail;
