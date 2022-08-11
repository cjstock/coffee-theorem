import type { NextPage } from "next";
import Layout from "../components/layout";
import MyBeans from "./mybeans";

const Home: NextPage = () => {

  return (
    <>
      <Layout selectedBottomTab="track">
        <MyBeans />
      </Layout>
    </>
  )
};

export default Home;
