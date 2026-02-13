// This can be used only in client component
// import { useParams } from "next/navigation"

import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export const dynamicParams = true 

export async function generateStaticParams(){
    const {data} = await blogService.getBlogPosts();

    return data?.data?.map((blog: BlogPost) => ({id: blog.id})).splice(0,3)
}


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