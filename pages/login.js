import Head from "next/head";
import Login from "../components/Login";

import SmallScreenModal from "../components/SmallScreenModal";

function LoginPage() {
  return (
    <>
      <Head>
        <title>Login / Sweetweet</title>
      </Head>
      <SmallScreenModal />
      <Login />
    </>
  );
}

export default LoginPage;
