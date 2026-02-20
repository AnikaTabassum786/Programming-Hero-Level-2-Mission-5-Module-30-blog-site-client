import HistoryTable from "@/components/modules/user/history/HistoryTable";
import { blogService } from "@/services/blog.service";

export default async function HistoryPage(){
 
    const response = await blogService.getBlogPosts();
    console.log(response)

    const posts = response.data?.data // [];
    console.log(posts)

    return (
        <>
          <HistoryTable posts={posts}></HistoryTable>
        </>
    )
}