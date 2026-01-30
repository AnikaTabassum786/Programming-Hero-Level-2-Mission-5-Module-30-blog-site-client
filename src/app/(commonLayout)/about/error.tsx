'use client'

import { useEffect } from "react"

export default function AboutError({error,reset}:{
  error: Error & { digest?: string }
  reset: () => void
}){

    useEffect(()=>{
     //We can pass this error to a logger
     console.error(error)
    },[])
    return(
        <>
        <p>Something Went Wrong. Please Try Again</p>
        <button onClick={()=>reset()}>Retry</button>
        </>
    )
}