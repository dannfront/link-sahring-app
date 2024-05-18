function TextDataUser({x,y,children}) {
    return (
        <text x={x} y={y}  text-anchor="middle" fill="black" >
            {children}
        </text>
    )
}

export default TextDataUser
