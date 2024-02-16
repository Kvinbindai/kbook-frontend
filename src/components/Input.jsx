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
    width='96'
  } = props;
  return (
    <label className="form-control">
      {children ? <div className="label">
        <span className="label-text text-2xl">{children}</span>
        {required && (
          <span className="label-text-alt text-xl text-red-500">*</span>
        )}
      </div> : null}
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-${width} ${extendedClass}`}
        disabled={disabled}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </label>
  );
};
export default Input;
