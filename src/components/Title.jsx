const Title = (props) => {
    const {children , className} = props
    return (
        <h1 className={`text-5xl bg-primary  ${className}`}>{children}</h1>
    )
}

export default Title