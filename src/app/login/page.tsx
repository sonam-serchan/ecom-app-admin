import LoginForm from "@/containers/auth/LoginForm";

export default function Login() {
  return (
    <main className="flex h-[60vh] items-center justify-center p-6">
      <div className="flex flex-col gap-6 text-center w-96">
        <div>
          <h3 className="font-medium text-2xl">Login</h3>
          <p className="font-light text-sm mt-2">
            Enter your email and password below to login
          </p>
        </div>
        <LoginForm />
        <p className="font-light text-sm">Forgot password?</p>
      </div>
    </main>
  );
}
