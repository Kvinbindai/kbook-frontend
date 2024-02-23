const Button = (props) => {
    const { onClick ,children , className = '' , type} = props
    const defaultClass = 'btn border-none text-primary'
    return (
        <button className={`${defaultClass} ${className}`} onClick={onClick} type={type}>{children}</button>
    )
}

export default Button