import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo,benefitFour,benefitThree } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Muziriz Technologies</title>
        <meta
          name="description"
          content="modernize your infrastructure & legacy applications leveraging Kubernetes, containers, & other cloud native capabilities with Searce."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Application Modernization"
        title="  Welcome to our Application Modernization Services"
      >
        At our IT Services start-up, we understand the importance of staying
        ahead of the competition in today’s digital world. That’s why we offer
        comprehensive application modernization services to help you stay ahead
        of the curve. Our application modernization services are designed to
        help you modernize your existing applications and systems to keep up
        with the ever-changing technology landscape. We provide a wide range of
        services, including:
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />{" "}
      <Benefits data={benefitThree} />
      <Benefits imgPos="right" data={benefitFour} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}
