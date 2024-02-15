const ErrorMessage = (props) => {
    const {children} = props
  return (
    <div className="label">
      <span className="label-text-alt text-red-500 text-lg">{children}</span>
    </div>
  );
};

export default ErrorMessage;
