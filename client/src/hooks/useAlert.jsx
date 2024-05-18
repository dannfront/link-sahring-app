import { useEffect, useState } from "react"


export default function useAlert(){
    const [isCopied, setIsCopied] = useState(false)
    useEffect(function () {
        let timer
        if (isCopied) {
            timer = setInterval(() => {
                setIsCopied(false)
            }, 3000)
        }
        return () => {
            clearInterval(timer)
        }
    }, [isCopied])

    return [isCopied,setIsCopied]
}