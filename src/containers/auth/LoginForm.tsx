import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input placeholder="name@example.com" />
      <Input placeholder="********" />
      <Button>Sign In</Button>
    </form>
  );
}
