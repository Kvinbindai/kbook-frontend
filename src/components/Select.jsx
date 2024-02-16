const Select = (props) => {
    const { name , value , children , placeholder ,errorMessage ,required ,disabled=false  } = props
  return (
    <label className="form-control ">
      {children ? (
        <div className="label">
          <span className="label-text text-2xl">{children}</span>
          {required && (
            <span className="label-text-alt text-xl text-red-500">*</span>
          )}
        </div>
      ) : null}
      <select className="select select-bordered text-white" disabled={disabled}>
        <option disabled selected>
          {placeholder}
        </option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </label>
  );
};

export default Select;
