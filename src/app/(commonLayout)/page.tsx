// import { Button } from "@/components/ui/button";


// export default function Home() {
//   return (
//     <div className="flex gap-4 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <Button>Hello</Button>
//       <Button variant="outline">World</Button>
//     </div>
//   );
// }


import { Button } from "@/components/ui/button";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";


export default async function Home() {
//  const {data} = await userService.getSession();
 const {data} = await blogService.getBlogPosts();

  console.log(data)
  return (
    <div>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}