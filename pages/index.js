import Head from "next/head";
import Hero from "../containers/Home/Hero";
import About from "../containers/Home/About";
import Tags from "../containers/Home/Tags";
import CTA from "../containers/Home/CTA";
import MessengerChat from "../components/MessengerChat";
import axios from "axios";
import { api, baseUrl } from "../api/api";
import { siteInfoQuery, tagsQuery } from "../api/queries";

export default function Home({ posts, info }) {
  const latestPosts = posts.slice(0, 6);
  const featuredPosts = posts
    .filter((post) => post.attributes.featured)
    .slice(0, 6);
  const trendingPosts = posts
    .filter((post) => post.attributes.trending)
    .slice(0, 6);

  return (
    <div>
      <Head>
        <title>ZoeeGallery</title>
        <meta name="description" content="Zoee's gallery of fine arts" />
        <meta
          name="keywords"
          content="Arts, Zoee, Fine Arts, Water Colors, Oil Painting, Abstract, Abstract Art"
        />
        <meta name="author" content="Zoee" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero info={info} />
        <About info={info} />
        <Tags
          featuredPosts={featuredPosts}
          latestPosts={latestPosts}
          trendingPosts={trendingPosts}
        />
        <CTA />
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const post = await fetch(`${baseUrl}${tagsQuery}`);

  const parsedPosts = await post.json();
  const data = parsedPosts.data;

  const siteInfo = await fetch(`${baseUrl}${siteInfoQuery}`);
  const parsedInfo = await siteInfo.json();
  const info = await parsedInfo.data;

  return {
    props: { posts: data, info: info.attributes },
  };
}
