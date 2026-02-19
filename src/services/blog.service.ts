import { env } from "@/env";
import { error } from "console";

const API_URL = env.API_URL;

//* No dynamic and No {cache:no-store}: SSG -> Static Page
//* {cache: no-store} : SSR -> Dynamic Page
//* {next:{revalidate:10}} : ISR -> Mix between static and dynamic page


interface ServiceOptions{
    cache?: RequestCache
    revalidate?:number
}


interface GetBlogsParams {
    isFeatured?: boolean;
    search?: string
}

export const blogService = {
    getBlogPosts: async function (params?: GetBlogsParams, options?:ServiceOptions) {
        try {
            const url = new URL(`${API_URL}/posts`);

            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== "") {
                        url.searchParams.append(key, value);
                    }
                });
            }
//   console.log(url.toString());

const config:RequestInit = {};
if(options?.cache){
    config.cache=options.cache;
}

if(options?.revalidate){
 config.next={revalidate:options.revalidate}
}

if(options?.revalidate){
  config.next ={revalidate:options.revalidate}
}

config.next = {...config.next,tags:["blogPosts"]};


const res = await fetch(url.toString(),config)

            // const res = await fetch(`${API_URL}/posts`, { next: { revalidate: 10 } })

            const data = await res.json()

            // This is an example
            // if(data.success){
            // return
            // }

            return { data: data, error: null }
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } }
        }
    },

    getBlogById: async function(id:string){
       try{
          const res = await fetch(`${API_URL}/posts/${id}`)
          const data = await res.json()
          return {data:data,error:null}
       }
       catch(err){
        return {data:null, error:{message:"Something Went Wrong"}}
       }
    }



}