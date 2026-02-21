
import BlogCard from "@/components/modules/homePage/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";
import Image from "next/image";
import coffee from "../../../public/coffee.jpg";



export default async function Home() {
//  const {data} = await userService.getSession();

 const {data} = await blogService.getBlogPosts({
  isFeatured:false,
 },
{
  cache:"no-store"
}
);

  // console.log(data)
  return (
    <div>
       <div className="relative w-full h-96 mb-6 flex justify-center">
        {/* <Image
            src={coffee}
            fill
            priority
            alt="Hero"
            className="object-cover rounded-md "
          /> */}

          <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=100"
            fill
            priority
            alt="Hero"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-md"
          />
       </div>
       <h1 className={"text-5xl font-bold text-center mb-4"}>
          Welcome to Our Blog
        </h1>

    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-5">
       {
      data?.data?.map((post:BlogPost)=>{
       return <BlogCard key={post.id} post={post}></BlogCard>
      })
     }
    </div>
    
    </div>
  );
}


// export default async function Home() {
//  const featuredPostsPromise = blogService.getBlogPosts({ isFeatured: true });
//   const postsPromise = blogService.getBlogPosts(
//     { limit: "3" },
//     { revalidate: 10 },
//   );

//   const [featuredPosts, posts] = await Promise.all([
//     featuredPostsPromise,
//     postsPromise,
//   ]);
 

//   // console.log(data)
//   return (
//     <div>
//        {featuredPosts?.data?.data && featuredPosts.data.data.length > 0 && (
//         <div className="mb-12">
//           <h2 className={"text-2xl font-bold mb-6"}>Featured Posts</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {featuredPosts.data.data.slice(0, 2).map((post: BlogPost) => (
//               <div key={post.id} className="border rounded-lg overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=100"
//                   alt={post.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-bold text-xl mb-2">{post.title}</h3>
//                   <p className="text-gray-600 line-clamp-2">{post.content}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <div>
//         <div className="grid grid-cols-3 gap-5">
//           {posts?.error?.message ? (
//             <p className="text-red-500">{posts?.error?.message}</p>
//           ) : null}
//           {posts?.data?.data?.map((post: BlogPost) => (
//             <BlogCard key={post.id} post={post} />
//           ))}
//         </div>
//       </div>
    
//     </div>
//   );
// }