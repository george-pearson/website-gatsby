import React from "react";
import Layout from "../../components/layout/layout";
import LogoBracketsNotFound from "../../../static/logoBracketsNotFound.inline.svg";
import * as style from "./style.module.css";

const NotFoundPage = () => {
  return (
    <Layout page="NotFound">
      <div className={style.container}>
        <LogoBracketsNotFound className={style.logoBracketsNotFound} />
        <p>Uh-oh, we can't seem to find that page...</p>
        <a className="blueLink" href="/">
          Back to homepage
        </a>
      </div>
    </Layout>
  );
};

export default NotFoundPage;