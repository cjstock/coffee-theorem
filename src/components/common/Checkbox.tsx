import { Dispatch } from "react";
import { ACTIONTYPE } from "../../utils/CoffeeReducer";

interface CheckboxProps {
    title: string;
    id: string;
    dispatch: Dispatch<ACTIONTYPE>;
}
const Checkbox = ({ id, title, dispatch }: CheckboxProps) => {
    return (
        <div className="col-span-3 sm:col-span-2 mt-2 space-y-4">
            <div className="flex items-start">
                <div className="flex h-5 items-center">
                    <input
                        id={id}
                        name={id}
                        type="checkbox"
                        className="h-4 w-4 form-checkbox rounded border-matcha-100 text-matcha-100 focus:ring-0 focus:ring-offset-0 bg-coffee-400 checked:bg-coffee-400 checked:border-matcha-100"
                        onChange={(e) =>
                            dispatch({
                                type: "HANDLE INPUT TEXT",
                                field: id,
                                payload: e.currentTarget.value,
                            })
                        }
                    />
                </div>
                <div className="ml-3 text-sm">
                    <label
                        htmlFor="comments"
                        className="font-medium text-matcha-100"
                    >
                        {title}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Checkbox;
