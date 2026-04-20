import { Route } from "@/types";

export const adminRoute:Route[]= [
    {
      title: "User Management",
      items: [
        {
          title: "Analytics",
          url: "/admin-dashboard/analytics",
        },
        {
          title: "Send Mail",
          url: "/admin-dashboard/send-mail",
        }
      ],
    }
  ]