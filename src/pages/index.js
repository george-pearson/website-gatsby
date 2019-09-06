import React from "react";
import Layout from "../components/layout/layout";
import Intro from "../components/intro/intro";

export default class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Intro />
      </Layout>
    )
  }
}