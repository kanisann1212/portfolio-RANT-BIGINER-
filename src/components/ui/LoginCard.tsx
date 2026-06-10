'use client'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type LoginData = {
  email: string
  password: string
}

export function LoginCard() {
  const { register,handleSubmit } = useForm<LoginData>()
  const router2 = useRouter()
  const onSubmit = async (data:LoginData)=>{
    const result = await signIn("credentials",{
      email:data.email,
      password:data.password,
      redirect:false,
    })
    if (result?.error) {
      toast.error("メールかパスワードが違います")
      return
    }
    toast.success("ログインしました")
    router2.push("/mypage")
  }
  return (
    <FieldSet className="w-full max-w-xs mb-5">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="username" className="text-2xl">Email address</FieldLabel>
          <Input id="username" type="text" placeholder="Email" {...register("email")} />
        </Field>
        <Field>
          <FieldLabel htmlFor="password" className="text-2xl">Password</FieldLabel>
          <Input id="password" type="password" placeholder="••••••••" {...register("password")}/>
          <Button onClick={handleSubmit(onSubmit)} className="w-[100px] h-[50px] text-[20px]">Login</Button> 
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
