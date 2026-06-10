"use client"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form"
import { SelectAgentByID } from "../session/SelectAgentByID";
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export type SignUpData = {
  name: string
  email: string
  password: string
  favoriteAgent: string
}

export function CreateIDCard() {
  const { register, control, handleSubmit } = useForm<SignUpData>()
  const router = useRouter()
  const onSubmit = async (data: SignUpData) => {
    toast.promise(
      async () => {
        const response = await fetch("/api/signUp",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
          if (!response.ok) {
          throw new Error("アカウント作成に失敗しました")  
        }
      },
            {
        loading: "アカウント作成中...",
        success: () => {
          router.push("/login")
          return "作成完了しました！"
        },
        error: "作成に失敗しました。再度やり直してください",
      }
    )
    router.push("/login") 
  }
  return (
    <FieldSet className="w-full max-w-xs mb-5" >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="username" className="text-2xl">Email address</FieldLabel>
          <Input id="username" type="text" placeholder="Email" {...register("email")}/>
          <FieldDescription className="text-red-600 font-extrabold">すでに登録済みEmailは避けてください</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="username" className="text-2xl">Your name</FieldLabel>
          <Input id="username" type="text" placeholder="Name" {...register('name')}/>
        </Field>
        <SelectAgentByID control={control} />
        <Field>
          <FieldLabel htmlFor="password" className="text-2xl">Password</FieldLabel>
          <Input id="password" type="password" placeholder="••••••••" {...register("password")}/>
          <FieldDescription className="text-red-600 font-extrabold">パスワードは8文字以上にしてください</FieldDescription>
          <Button onClick={handleSubmit(onSubmit)} className="w-[100px] h-[50px] text-[20px] mt-20">Login</Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}