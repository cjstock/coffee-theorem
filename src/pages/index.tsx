import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Layout from "../components/layout";
import NavBar from "../components/navbar";
import { trpc } from "../utils/trpc";
import MyBeans from "./mybeans";

const Home: NextPage = () => {

  return (
    <>
      <Layout>
        <MyBeans />
      </Layout>
    </>
  )
};


export default Home;
