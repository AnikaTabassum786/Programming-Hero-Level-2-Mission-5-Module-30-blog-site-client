// import * as React from "react"
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   MoreHorizontalIcon,
// } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { buttonVariants, type Button } from "@/components/ui/button"

// function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
//   return (
//     <nav
//       role="navigation"
//       aria-label="pagination"
//       data-slot="pagination"
//       className={cn("mx-auto flex w-full justify-center", className)}
//       {...props}
//     />
//   )
// }

// function PaginationContent({
//   className,
//   ...props
// }: React.ComponentProps<"ul">) {
//   return (
//     <ul
//       data-slot="pagination-content"
//       className={cn("flex flex-row items-center gap-1", className)}
//       {...props}
//     />
//   )
// }

// function PaginationItem({ ...props }: React.ComponentProps<"li">) {
//   return <li data-slot="pagination-item" {...props} />
// }

// type PaginationLinkProps = {
//   isActive?: boolean
// } & Pick<React.ComponentProps<typeof Button>, "size"> &
//   React.ComponentProps<"a">

// function PaginationLink({
//   className,
//   isActive,
//   size = "icon",
//   ...props
// }: PaginationLinkProps) {
//   return (
//     <a
//       aria-current={isActive ? "page" : undefined}
//       data-slot="pagination-link"
//       data-active={isActive}
//       className={cn(
//         buttonVariants({
//           variant: isActive ? "outline" : "ghost",
//           size,
//         }),
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function PaginationPrevious({
//   className,
//   ...props
// }: React.ComponentProps<typeof PaginationLink>) {
//   return (
//     <PaginationLink
//       aria-label="Go to previous page"
//       size="default"
//       className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
//       {...props}
//     >
//       <ChevronLeftIcon />
//       <span className="hidden sm:block">Previous</span>
//     </PaginationLink>
//   )
// }

// function PaginationNext({
//   className,
//   ...props
// }: React.ComponentProps<typeof PaginationLink>) {
//   return (
//     <PaginationLink
//       aria-label="Go to next page"
//       size="default"
//       className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
//       {...props}
//     >
//       <span className="hidden sm:block">Next</span>
//       <ChevronRightIcon />
//     </PaginationLink>
//   )
// }

// function PaginationEllipsis({
//   className,
//   ...props
// }: React.ComponentProps<"span">) {
//   return (
//     <span
//       aria-hidden
//       data-slot="pagination-ellipsis"
//       className={cn("flex size-9 items-center justify-center", className)}
//       {...props}
//     >
//       <MoreHorizontalIcon className="size-4" />
//       <span className="sr-only">More pages</span>
//     </span>
//   )
// }

// export {
//   Pagination,
//   PaginationContent,
//   PaginationLink,
//   PaginationItem,
//   PaginationPrevious,
//   PaginationNext,
//   PaginationEllipsis,
// }


"use client"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./button";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  meta: {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
  }
}

export function PaginationControls({ meta }: PaginationControlsProps) {

  const { limit:pageSize, page:currentPage, total, totalPage } = meta
  // console.log({limit,page,total,totalPage})

  const searchParams = useSearchParams();
  const router = useRouter()
  // console.log(searchParams.get("page"));

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    router.push(`?${params.toString()}`)
  }

  //* Showing 1 to 10 of 21 -> page 1
  //* Showing 11 to 20 of 21 -> page 2
  
  const start = (currentPage - 1) * pageSize +1
  const end = Math.min(currentPage * pageSize, total);

  return (
    <>
      <div className="flex items-center justify-between px-2 py-4 border-t mt-4">
        <div className="text-sm text-muted-foreground">
          <div className="text-sm text-muted-foreground">
            Showing {start} to {end} of {total} results
          </div>

        </div>

        <div className="flex items-center space-x-2">

           <Button
            variant="outline"
            size="icon"
            onClick={()=>{navigateToPage(1)}}
            disabled ={currentPage === 1}
            >
            <ChevronsLeft className="h-4 w-4"
            />
          </Button> 

          

          <Button
            variant="outline"
            size="icon"
             onClick={() => { navigateToPage(currentPage - 1) }}
             disabled ={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPage}
            </span>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => { navigateToPage(currentPage + 1) }}
            disabled ={currentPage === totalPage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
             onClick={() => { navigateToPage(totalPage) }}
             disabled ={currentPage === totalPage}
            >
            <ChevronsRight className="h-4 w-4"
           
            
            />
          </Button>
        </div>
      </div>
    </>
  )
}
