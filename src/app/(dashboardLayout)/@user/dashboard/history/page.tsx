import HistoryTable from "@/components/modules/user/history/HistoryTable";
import { blogService } from "@/services/blog.service";

export default async function HistoryPage({searchParams,}:{searchParams:Promise<{page:string}>}){

    const {page} = await searchParams;
    // console.log(page)
 
    const response = await blogService.getBlogPosts({page});
    console.log(response)

    const posts = response.data?.data // [];
    // console.log(posts)

    return (
        <>
          <HistoryTable posts={posts}></HistoryTable>
        </>
    )
}