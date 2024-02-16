import { signupAction } from "@/actions/adminAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupForm() {
  return (
    <form className="flex flex-col gap-4" action={signupAction}>
      <Input name="name" placeholder="John Smith" required />
      <Input
        name="email"
        placeholder="name@example.com"
        type="email"
        required
      />
      <Input name="password" placeholder="********" type="password" required />
      <Button type="submit">Sign up</Button>
    </form>
  );
}
