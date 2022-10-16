import Head from "next/head";
import Hero from "../containers/Home/Hero";
import About from "../containers/Home/About";
import Tags from "../containers/Home/Tags";
import CTA from "../containers/Home/CTA";
import MessengerChat from "../components/MessengerChat";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Zooe Gallery</title>
        <meta name="description" content="Lorem Ipsum Dolor Amet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <About />
        <Tags />
        <CTA />
      </main>
    </div>
  );
}
