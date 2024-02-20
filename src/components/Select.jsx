const Select = (props) => {
    const { name , value , children , placeholder ,errorMessage ,required ,disabled=false , extendedClass ,option , onChange } = props
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
      <select className={`select select-bordered text-white ${extendedClass}`} disabled={disabled} onChange={onChange}>
        <option disabled selected>
          {placeholder}
        </option>
        {
          option?.map((e)=>{
            return <option key={e.id} value={e.name_th}>{e.name_th}</option>
          })
        }
      </select>
    </label>
  );
};

export default Select;
