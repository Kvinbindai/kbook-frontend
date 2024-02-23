const SearchBar = (props) => {
  const { value, onChange, name , onClick  ,placeholder } = props;
  return (
    <div className="form-control relative">
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-24 md:w-auto"
        value={value}
        onChange={onChange}
        name={name}
      />
      <button className="absolute right-3 top-2 hover:bg-primary-500 rounded-full flex p-1" onClick={onClick}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
};

export default SearchBar;
