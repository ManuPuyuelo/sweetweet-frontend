import Head from "next/head";
import Home from "../components/Home";

import SmallScreenModal from "../components/SmallScreenModal";

function Index() {
  return (
    <>
      <Head>
        <title>Home / Sweetweet</title>
      </Head>
      <SmallScreenModal />
      <Home />
    </>
  );
}

export default Index;
