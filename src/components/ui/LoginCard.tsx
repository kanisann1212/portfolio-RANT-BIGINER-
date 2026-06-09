import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

export function LoginCard() {
  return (
    <FieldSet className="w-full max-w-xs mb-5">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="username">Email address</FieldLabel>
          <Input id="username" type="text" placeholder="Email" />
          <FieldDescription>
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <FieldDescription>
          </FieldDescription>
          <Input id="password" type="password" placeholder="••••••••" />
          <Button className="w-[100px] h-[50px] text-[20px]">Login</Button> 
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
