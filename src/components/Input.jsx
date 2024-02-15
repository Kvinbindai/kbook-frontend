const Input = (props) => {
    const { children } = props
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{children}</span>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </label>
  );
};
export default Input;
