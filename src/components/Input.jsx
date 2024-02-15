import ErrorMessage from "./ErrorMessage";

const Input = (props) => {
  const {
    name,
    value,
    onChange,
    children,
    placeholder,
    type = "text",
    errorMessage,
    required = false,
    disabled = false,
    extendedClass,
  } = props;
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text text-2xl">{children}</span>
        {required && (
          <span className="label-text-alt text-xl text-red-500">*</span>
        )}
      </div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-96` + " " + extendedClass}
        disabled={disabled}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </label>
  );
};
export default Input;
