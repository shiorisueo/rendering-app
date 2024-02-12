import { Inter } from "next/font/google";
import Link from "next/link";

import { TITLE as ssrTiltle } from "./serverSideRendering";
import { TITLE as ssgTitle } from "./staticSiteGeneration";
import { TITLE as isrTitle } from "./incrementalStaticRegeneration";
import { TITLE as csrTitle } from "./clientSideRendering";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Next.js Page Router</h1>
      <div>
        <Link href="/serverSideRendering">{ssrTiltle}</Link>
      </div>
      <br />
      <div>
        <Link href="/staticSiteGeneration">{ssgTitle}</Link>
      </div>
      <br />
      <div>
        <Link href="/incrementalStaticRegeneration">{isrTitle}</Link>
      </div>
      <br />
      <div>
        <Link href="/clientSideRendering">{csrTitle}</Link>
      </div>
    </main>
  );
}
