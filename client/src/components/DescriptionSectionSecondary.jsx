function DescriptionSectionSecondary({title,descrition,isClass=""}) {
    return (
        <section className={`container md:pt-5 ${isClass}`}>
            <h2 className="font-bold text-2xl md:text-3xl">{title}</h2>
            <p>{descrition}</p>
        </section>
    )
}

export default DescriptionSectionSecondary
