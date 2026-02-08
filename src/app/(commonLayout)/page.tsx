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
import { authClient } from "@/lib/auth-client";
import { cookies } from "next/headers";

export default async function Home() {

  const cookieStore = await cookies();
  console.log(cookieStore.toString());

  const res = await fetch("http://localhost:5000/api/auth/get-session",{
    headers:{
      Cookie: cookieStore.toString(),
    },
    cache:"no-store"
  })

  const session = await res.json();
  console.log(session)

  return (
    <div>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}