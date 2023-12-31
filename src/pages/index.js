import React from "react";
import Head from "next/head";
import SideBar from "@/components/SideBar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex">
          <SideBar />
        </div>
      </main>
    </>
  );
};

export default Home;
