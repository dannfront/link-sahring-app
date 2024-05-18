function Alert({message,img}) {
    return (
        <div className={`fade-in-out absolute w-[280px] rounded-lg bg-DarkGrey top-[85%] left-[50%] transform -translate-x-[50%] p-2 text-xs text-white text-center flex gap-2 items-center`}>
            <img src={`./images/${img}.svg`} alt="copied" />
            {message}
        </div>
    )
}

export default Alert
