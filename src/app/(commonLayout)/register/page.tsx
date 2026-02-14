import { RegisterForm } from "@/components/modules/authentication/signup1";

export default  function Register(){
    return(
        <div>
        {/* <Signup1 
        logo={{
          url: "/",
          src: "/logo.png",
          alt: "Logo",
          title: "My App",
        }}
        buttonText="Login"
        className=""
        /> */}
        <RegisterForm></RegisterForm>
        </div>
    )
}