// This can be used only in client component
// import { useParams } from "next/navigation"


export default async function BlogDetails({params}:{params:Promise<{id:string}>}) {
    
    const {id} = await params;
    console.log(id)

    return (
        <div>
            This is Blog Details: {id}
        </div>
    )
}

 // This can be used only in client component
    // const {id} = useParams()