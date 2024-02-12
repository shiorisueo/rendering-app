import Head from "next/head";
import Link from "next/link";
import { SAMPLE_API_ENDPOINT } from "./api";
import { User } from "@/types/users";
import { FetchDataUser } from "@/components/fetchDataUser";

export const TITLE = "Incremental Static Regeneration (ISR)";

export const IncrementalStaticRegeneration = ({
  users,
}: {
  users: User | undefined;
}) => {
  return (
    <>
      <Head>{TITLE}</Head>
      <h1>{TITLE}</h1>
      <FetchDataUser users={users} />
      <br />
      <Link href="/">戻る</Link>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(SAMPLE_API_ENDPOINT);
  const users = await res.json();
  return {
    props: { users },
    revalidate: 5,
  };
}
export default IncrementalStaticRegeneration;
