import { env } from "@/env";

const API_URL = env.API_URL;

//* No dynamic and No {cache:no-store}: SSG -> Static Page
//* {cache: no-store} : SSR -> Dynamic Page
//* {next:{revalidate:10}} : ISR -> Mix between static and dynamic page

export const blogService = {
    getBlogPosts: async function(){
        try{
            const res =await fetch(`${API_URL}/posts`,{next:{revalidate:10}})
            const data = await res.json()
            
            // This is an example
            // if(data.success){
            // return
            // }
            
            return{data:data,error:null}
        }
        catch(err){
          return {data:null, error:{message:"Something Went Wrong"}}
        }
    }
}