import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `ToyStore-${title}`;
    },[title])
}

export default useTitle;