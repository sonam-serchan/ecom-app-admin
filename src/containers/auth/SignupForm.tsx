import { signupAction } from "@/actions/adminAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupForm() {
  return (
    <form className="flex flex-col gap-4" action={signupAction}>
      <Input name="name" placeholder="John Smith" />
      <Input name="email" placeholder="name@example.com" />
      <Input name="password" placeholder="********" type="password" />
      <Button type="submit">Sign up</Button>
    </form>
  );
}
