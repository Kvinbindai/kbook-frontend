const Button = (props) => {
    const { children , className = '' } = props
    const defaultClass = 'btn btn-primary'
    return (
        <button className={defaultClass+' '+className}>{children}</button>
    )
}

export default Button