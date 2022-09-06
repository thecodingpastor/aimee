import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import FloatingNav from "../components/Navigation/FloatingNav";

import Footer from "../components/Footer/Footer";
import Header from "../components/Navigation/Header";
import Team from "../components/Team/Team";
import Contact from "../components/Contact/Contact";
// import Video from "../components/VideoBackground/Video";
import OurServices from "../components/OurServices/OurServices";
import Core from "../components/Core/Core";

import classes from "./Index.module.scss";
import PageLoading from "../components/UI/PageLoading";
import dynamic from "next/dynamic";

const Video = dynamic(
  () => {
    return import("../components/VideoBackground/Video");
  },
  { ssr: false }
);

const Home: NextPage = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head>
        <title>Aimee Properties</title>
        <meta
          name="description"
          content="Aimee Properties and Facility Management, Real Estate, Sales and Letting, Project Management"
        />
        <link rel="icon" href="/images/logo2.jpg" />
      </Head>
      {Loading && <PageLoading />}
      <Video />
      <Header />
      <main className={classes.MainContainer}>
        <Core />
        <OurServices />
        <Team />
        <Contact />
        <FloatingNav />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
