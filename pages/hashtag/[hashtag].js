import { useRouter } from "next/router";
import Head from "next/head";
import Hashtag from "../../components/Hashtag";
import SmallScreenModal from "../../components/SmallScreenModal";

function HashtagPage() {
  const router = useRouter();
  const { hashtag } = router.query;

  return (
    <>
      <Head>
        <title>#{hashtag} / Sweetweet</title>
      </Head>
      <SmallScreenModal />
      <Hashtag />
    </>
  );
}

export default HashtagPage;
