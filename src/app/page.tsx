import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Link href="/" className="text-blue-400 underline">
        Home Page
      </Link>{" "}
      -{" "}
      <Link href="/settings" className="text-blue-400 underline">
        Settings{" "}
      </Link>
      -{" "}
      <Link href="/login" className="text-blue-400 underline">
        Login
      </Link>
    </main>
  );
}
