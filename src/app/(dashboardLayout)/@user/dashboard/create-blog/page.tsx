import CreateBlogFormServer from "@/components/modules/user/createBlog/CreateBlogFormServer";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function CreateBlog(){
     
     
    const {data} = await blogService.getBlogPosts({},{ cache: 'no-store' })
    console.log(data)
    return(
        <div>
             <CreateBlogFormServer/>
             {
                data.data.map((item:BlogPost)=>{
                    return(
                        <div key={item.id}>
                          <p >{item.title}</p>
                        </div>
                    )
                })
             }
        </div>
    )
}