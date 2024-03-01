const Button = (props) => {
    const { onClick ,children , className = '' , type , disabled} = props
    const defaultClass = 'btn border-none text-primary'
    return (
        <button className={`${defaultClass} ${className}`} onClick={onClick} type={type} disabled={disabled}>{children}</button>
    )
}

export default Button