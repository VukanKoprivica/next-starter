import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-5 p-24 ${inter.className}`}
    >
      <Link href={`http://localhost:3000/cs`}>Client Side Rendering</Link>
      <Link href={`http://localhost:3000/ssr`}>Server Side Rendering</Link>
      <Link href={`http://localhost:3000/ssg`}>Static Site Generation</Link>
    </main>
  );
}
