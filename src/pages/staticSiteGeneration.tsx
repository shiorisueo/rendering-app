import { User } from "@/types/users";
import { SAMPLE_API_ENDPOINT } from "./api";
import Head from "next/head";
import { FetchDataUser } from "@/components/fetchDataUser";
import Link from "next/link";

export const TITLE = "Static-Site Generation (SSG)";
export const StaticSideGeneration = ({
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
  };
}

export default StaticSideGeneration;
