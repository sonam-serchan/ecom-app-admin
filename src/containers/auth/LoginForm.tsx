"use client";

import { signInUser } from "@/actions/adminAction";
import ErrorAlert from "@/components/alert/ErrorAlert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";

const initialState = {
  error: "",
};

export default function LoginForm() {
  const [state, formAction] = useFormState(signInUser, initialState);

  return (
    <form className="flex flex-col gap-4" action={formAction}>
      {state.error && <ErrorAlert message={state.error} />}
      <Input
        name="email"
        placeholder="name@example.com"
        type="email"
        required
      />
      <Input name="password" placeholder="********" type="password" required />
      <Button>Sign In</Button>
    </form>
  );
}
