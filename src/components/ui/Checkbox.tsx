interface CheckboxProps {
    title: string;
    id: string;
    isChecked: boolean;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
const Checkbox = ({ id, title, handleChange, isChecked }: CheckboxProps) => {
    return (
        <div className="col-span-3 sm:col-span-2 mt-2 space-y-4">
            <div className="flex items-start">
                <div className="flex h-5 items-center">
                    <input
                        id={id}
                        name={id}
                        checked={isChecked}
                        type="checkbox"
                        className="h-4 w-4 form-checkbox rounded border-matcha-100 text-matcha-100 focus:ring-0 focus:ring-offset-0 bg-coffee-400 checked:bg-coffee-400 checked:border-matcha-100"
                        onChange={handleChange}
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
