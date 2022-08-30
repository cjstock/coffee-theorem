import { NextPage } from "next";
import Layout from "../../components/layout";

const AboutTradePage: NextPage = () => {
  return (
    <Layout selectedBottomTab="learn">
      <div>{"About Trade"}</div>
    </Layout>
  );
};

export default AboutTradePage;
