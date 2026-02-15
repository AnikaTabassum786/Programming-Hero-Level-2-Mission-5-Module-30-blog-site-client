// import { cn } from "@/lib/utils";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// // interface Signup1Props {
// //   heading?: string;
// //   logo: {
// //     url: string;
// //     src: string;
// //     alt: string;
// //     title?: string;
// //   };
// //   buttonText?: string;
// //   googleText?: string;
// //   signupText?: string;
// //   signupUrl?: string;
// //   className?: string;
// // }

// const Signup1 = () => {
//   return (
//     <section className={cn("h-screen bg-muted")}>
//       <div className="flex h-full items-center justify-center">
//         {/* Logo */}
//         <div className="flex flex-col items-center gap-6 lg:justify-start">
//           {/* <a href={logo.url}>

//           </a> */}
//           <div className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded-md border border-muted bg-background px-6 py-8 shadow-md">
//             {/* {heading && <h1 className="text-xl font-semibold">{heading}</h1>} */}
//             <Input
//               type="name"
//               placeholder="Full Name"
//               className="text-sm"
//               required
//             />
//             <Input
//               type="email"
//               placeholder="Email"
//               className="text-sm"
//               required
//             />
//             <Input
//               type="password"
//               placeholder="Password"
//               className="text-sm"
//               required
//             />
//             <Input
//               type="password"
//               placeholder="Confirm Password"
//               className="text-sm"
//               required
//             />
//             <Button type="submit" className="w-full">
//               {/* {buttonText} */}
//             </Button>
//           </div>
//           <div className="flex justify-center gap-1 text-sm text-muted-foreground">
//             {/* <p>{signupText}</p> */}
//             <a
//               // href={signupUrl}
//               className="font-medium text-primary hover:underline"
//             >
//               Login
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { Signup1 };



"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useForm } from "@tanstack/react-form";

import * as z from "zod"
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "This field is required"),
  email: z.email(),
  password: z.string().min(8, "Minimum length is 8")
})


export function RegisterForm({ ...props }: React.ComponentProps<typeof Card>) {

    const handleGoogleLogin = async()=>{
    const data = authClient.signIn.social({
    provider: "google",
    callbackURL:'http://localhost:3000',
  })
  console.log(data)
  }

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    },

    validators: {
      onSubmit: formSchema,
    },

    onSubmit: async ({ value }) => {

      // console.log(value)
      // console.log("Submitted")

      const toastId = toast.loading("Creating user")
      try {
        const { data, error } = await authClient.signUp.email(value)

        if (error) {
          toast.error(error.message, { id: toastId })
          return
        }
        toast.success("User Created", { id: toastId })
      }


      catch (err) {
        toast.error("Something Went Wrong, please try again", { id: toastId })
      }

    }
  })

  console.log(form.state)


  return (
    <div className="p-20">
      <Card {...props}>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>

          <form
            id="register-form"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit(e);
            }}
          >


            <FieldGroup>
              <form.Field name="name" children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}>
              </form.Field>

              <form.Field name="email" children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (

                  <Field>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      type="email"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}>
              </form.Field>

              <form.Field name="password" children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      type="password"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}>
              </form.Field>
            </FieldGroup>

          </form>

        </CardContent>

        <CardFooter className="flex flex-col justify-end">
          <Button form="register-form" type="submit">Submit</Button>
          <Button
            onClick={() => handleGoogleLogin()}
            variant="outline"
            type="button"
          >
            Login with Google
          </Button>
        </CardFooter>

      </Card>
    </div>
  );
}