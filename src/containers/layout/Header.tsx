import Link from "next/link";

export default function Header() {
  return (
    <main className="flex items-center justify-between p-6">
      <div>Ecomm-app</div>
      <Link href={"/login"}>Login</Link>
    </main>
  );
}
