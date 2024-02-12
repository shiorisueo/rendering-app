import Link from "next/link";
import { SAMPLE_API_ENDPOINT } from "./api";
import { User } from "@/types/users";
import { FetchDataUser } from "@/components/fetchDataUser";

export const TITLE = "Server Side Rendering (SSR)";

export const ServerSideRendering = ({ users }: { users: User | undefined }) => {
  return (
    <>
      <h1>{TITLE}</h1>
      <FetchDataUser users={users} />
      <br />
      <Link href="/">戻る</Link>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(SAMPLE_API_ENDPOINT);
  const users = await res.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
export default ServerSideRendering;
