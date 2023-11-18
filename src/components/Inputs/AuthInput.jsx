const FormInput = ({ type = "text", placeholder, value, handleChange }) => {
    return (
        <input
            value={value}
            onChange={handleChange}
            className="outline-none px-3 py-1 w-1/2 rounded bg-slate-50 border dark:border-none dark:bg-slate-700 dark:text-slate-50"
            type={type}
            placeholder={placeholder}
        />
    );
};

export default FormInput