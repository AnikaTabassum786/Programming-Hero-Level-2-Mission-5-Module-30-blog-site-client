
import BlogCard from "@/components/modules/homePage/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";


export default async function Home() {
//  const {data} = await userService.getSession();
 const {data} = await blogService.getBlogPosts();

  console.log(data)
  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-5">
     {
      data?.data?.map((post:BlogPost)=>{
       return <BlogCard key={post.id} post={post}></BlogCard>
      })
     }
    
    </div>
  );
}