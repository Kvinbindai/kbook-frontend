const Button = (props) => {
    const { onClick ,children , className = '' } = props
    const defaultClass = 'btn btn-primary'
    return (
        <button className={defaultClass+' '+className} onClick={onClick}>{children}</button>
    )
}

export default Button