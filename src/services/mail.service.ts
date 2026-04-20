import { env } from "@/env";
import { error } from "console";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

export const mailService = {


createMail:async(payload: { subject: string; message: string })=>{
      try{
            const cookieStore = await cookies()
            console.log(cookieStore)
           
                 const res = await fetch(`${API_URL}/mail/send`,{
                   method:"POST",
                   headers:{
                     "Content-Type":"application/json",
                     Cookie:cookieStore.toString()
                   },
                   credentials:"include",
                   body:JSON.stringify(payload)
                 })

                 const data = await res.json();
                 if(!res.ok){
                    return {data:null,error}
                 }
                 return {data:data,error:null}

        }
        catch(err){
          console.log(error)
          return{data:null,error:{message:"Something Went Wrong"}}
        }
  },

  



};