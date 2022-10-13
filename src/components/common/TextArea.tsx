interface TextAreaProps {
    title: string;
    id: string;
    placeholder?: string;
    value?: string;
    handleChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}
const TextArea = ({ id, title, value, handleChange, placeholder }: TextAreaProps) => {
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
                    className={`form-input block w-full flex-1 rounded-md text-matcha-100 bg-coffee-400 border-coffee-200 focus:border-coffee-100 focus:ring-coffee-100 sm:text-sm transition-colors`}
                    placeholder={placeholder || "Example Text"}
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default TextArea;
