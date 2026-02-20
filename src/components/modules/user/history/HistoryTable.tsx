import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BlogPost } from "@/types";

export const title = "Table with Vertical Lines";

const projects = [
  {
    name: "Website Redesign",
    status: "In Progress",
    priority: "High",
    assignee: "John Doe",
  },
  {
    name: "Mobile App",
    status: "Planning",
    priority: "Medium",
    assignee: "Jane Smith",
  },
  {
    name: "API Integration",
    status: "Completed",
    priority: "High",
    assignee: "Bob Johnson",
  },
  {
    name: "Database Migration",
    status: "In Progress",
    priority: "Critical",
    assignee: "Alice Williams",
  },
];

const HistoryTable = ({posts}:{posts:BlogPost[]}) => (
  <div className="w-full max-w-4xl rounded-md border bg-background">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="border-r">Title</TableHead>
          <TableHead className="border-r">isFeatured</TableHead>
          <TableHead className="border-r">views</TableHead>
          <TableHead>Assignee</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* {projects.map((project) => (
          <TableRow key={project.name}>
            <TableCell className="border-r font-medium">
              {project.name}
            </TableCell>
            <TableCell className="border-r">{project.status}</TableCell>
            <TableCell className="border-r">{project.priority}</TableCell>
            <TableCell>{project.assignee}</TableCell>
          </TableRow>
        ))} */}


        {
           posts.map((item)=>{
            return(
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                {/* <TableCell>{item.isFeatured}</TableCell> */}
                <TableCell className="flex flex-wrap gap-1">
                    {item.tags && item.tags.length > 0 ? (
                      item.tags.map((item, index) => (
                        <p key={index}>
                          {item}
                        </p>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        No tags
                      </span>
                    )}
                  </TableCell>
                <TableCell>{item.views}</TableCell>
                {/* <TableCell>{item.title}</TableCell> */}
                

              </TableRow>
            )
           })
        }


      </TableBody>
    </Table>
  </div>
);

export default HistoryTable;
