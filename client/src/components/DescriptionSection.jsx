function DescriptionSection({title,descrition,isClass=""}) {
    return (
        <section className={`container md:pt-5 ${isClass}`}>
            <h1 className="font-bold text-2xl md:text-3xl">{title}</h1>
            <p>{descrition}</p>
        </section>
    )
}

export default DescriptionSection
