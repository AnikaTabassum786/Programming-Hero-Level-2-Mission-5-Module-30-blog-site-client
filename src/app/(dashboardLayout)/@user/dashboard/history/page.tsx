import HistoryTable from "@/components/modules/user/history/HistoryTable";
import { PaginationControls } from "@/components/ui/pagination";
import { blogService } from "@/services/blog.service";

export default async function HistoryPage({ searchParams, }: { searchParams: Promise<{ page: string }> }) {

    const { page } = await searchParams;
    // console.log(page)

    const response = await blogService.getBlogPosts({ page });
    console.log(response)

    const posts = response.data?.data || [];
    // console.log(posts)

    const pagination = response.data?.pagination || {
        limit: 10,
        page: 1,
        total: 0,
        totalPage: 1
    }
    // console.log(pagination)

    return (
        <>
            <HistoryTable posts={posts}></HistoryTable>
            <PaginationControls meta={pagination}></PaginationControls>
        </>
    )
}