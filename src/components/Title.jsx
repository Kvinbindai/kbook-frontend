const Title = (props) => {
    const {children , className} = props
    return (
        <h1 className={`text-5xl  ${className}`}>{children}</h1>
    )
}

export default Title