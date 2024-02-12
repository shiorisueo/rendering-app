import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

import { SAMPLE_API_ENDPOINT } from "./api";
import { User } from "@/types/users";
import { FetchDataUser } from "@/components/fetchDataUser";

export const TITLE = "Client side Rendering (CSR)";

export const ClientSideRendering = () => {
  const { data: users } = useSWR<User>(SAMPLE_API_ENDPOINT, fetcher);
  return (
    <>
      <h1>{TITLE}</h1>
      <FetchDataUser users={users} />
      <br />
      <Link href="/">戻る</Link>
    </>
  );
};

async function fetcher() {
  const res = await fetch(SAMPLE_API_ENDPOINT);
  const users = await res.json();
  return users;
}
export default ClientSideRendering;
