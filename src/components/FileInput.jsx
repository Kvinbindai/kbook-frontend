const FileInput = (props) => {
    const { disabled = false } = props
  return (
    <label className="form-control w-96">
      <div className="label">
        <span className="label-text text-2xl">UPLOAD IMAGE FILE :</span>
      </div>
      <input
      disabled={disabled}
        type="file"
        className="file-input file-input-bordered w-96"
        placeholder="test"
      />
    </label>
  );
};
export default FileInput;
