function Form({children,handdler}) {
    return (
        <form className="container mt-5 first:mt-0 last:mb-0" onSubmit={handdler}>
            {children}
        </form>
    )
}

export default Form
