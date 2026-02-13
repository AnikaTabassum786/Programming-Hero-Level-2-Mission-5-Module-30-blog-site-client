// This can be used only in client component
// import { useParams } from "next/navigation"

import { blogService } from "@/services/blog.service";


export default async function BlogDetails({params}:{params:Promise<{id:string}>}) {
    
    const {id} = await params;
    console.log(id)

    const {data:blog} = await blogService.getBlogById(id)
    console.log(blog)

    return (
        <div>
            This is Blog Details: {id}
            <p>{blog.title}</p>
        </div>
    )
}

 // This can be used only in client component
    // const {id} = useParams()