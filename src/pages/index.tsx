import {
  SignInButton,
  SignOutButton,
  useUser,
  // useSession,
} from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();
  // const post = api.post.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>Auth pages</h1>
          {!!user.isSignedIn && <SignOutButton />}
          {!user.isSignedIn && <SignInButton />}
        </div>
      </main>
    </>
  );
};

export default Home;
