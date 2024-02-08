import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Next js 12, 13, 14
      <Link href={'/info'}>Info</Link>
    </main>
  );
}
