// export const dynamic = 'force-dynamic'



// export default async function AboutPage(){

//     await new Promise((resolve)=>setTimeout(resolve,4000));

//     // throw new Error("Something went wrong");

//     return(
//         <div>
//         This is About Page
//         </div>
//     )
// }

"use client"

import { getBlogs } from "@/action/blog.action";
import { useEffect, useState } from "react";

export default function AboutPage(){
    const [data,setData] = useState();
    const [error,setError] = useState<{ message: string } | null>(null)

    console.log(data);

    useEffect(()=>{
        (async()=>{
            const {data} = await getBlogs();
            setData(data)
            setError(error)
        })();
    },[])

    return(
        <div>
            <p>This is about page component</p>
        </div>
    )
}