
function DataUserPreview({user}) {
    return (
        <section className="text-center">
            <h1 className="font-bold text-xl md:text-2xl">{user?.name} {user?.lastName}</h1>
            <h2 className=" text-sm md:text-base">{user?.email}</h2>
        </section>
    )
}

export default DataUserPreview
