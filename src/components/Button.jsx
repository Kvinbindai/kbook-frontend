const Button = (props) => {
    const { onClick ,children , className = ''} = props
    const defaultClass = 'btn border-none text-white'
    return (
        <button className={`${defaultClass} ${className}`} onClick={onClick}>{children}</button>
    )
}

export default Button