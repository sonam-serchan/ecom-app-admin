import SignupForm from "@/containers/auth/SignupForm";

export default function Signup() {
  return (
    <main className="flex h-[60vh] items-center justify-center p-6">
      <div className="flex flex-col gap-6 text-center w-96">
        <div>
          <h3 className="font-medium text-2xl">Create an account</h3>
          <p className="font-light text-sm mt-2">
            Enter your email below to create your account
          </p>
        </div>
        <SignupForm />
        <p className="font-light text-sm">
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </main>
  );
}
