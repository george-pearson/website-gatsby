import React from "react";
import Layout from "../../components/layout/layout";
import * as style from "./style.module.css";

export default class Photos extends React.Component {
  render() {
    return (
      <Layout>
        <div className={style.photos}>
            Photos
        </div>
      </Layout>
    )
  }
}