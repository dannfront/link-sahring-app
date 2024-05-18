function MainPreview({children}) {
    return (
        <main className="max-w-[237px] w-[90%] mx-auto flex flex-col gap-5 justify-center items-center py-5 mb-10 rounded-2xl md:bg-white md:mt-[-12rem] md:rounded-xl md:max-w-[350px] md:shadow-2xl">
            {children}
        </main>
    )
}

export default MainPreview
