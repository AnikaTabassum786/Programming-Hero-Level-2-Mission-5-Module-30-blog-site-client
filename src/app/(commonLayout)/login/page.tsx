import { Login1 } from "@/components/modules/authentication/login1";

export default  function LoginPage(){
    return(
        <div>
        <Login1
        logo={{
          url: "/",
          src: "/logo.png",
          alt: "Logo",
          title: "My App",
        }}
        buttonText="Login"
        className=""
      />
        </div>
    )
}