import React from "react";
import Seo from "../../components/seo/seo";
import Layout from "../../components/layout/layout";
import LogoBracketsNotFound from "../../../static/logoBracketsNotFound.inline.svg";
import * as style from "./style.module.css";

const NotFoundPage = () => {
  return (
    <Layout>
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

export const Head = () => <Seo page="NotFound" />;

export default NotFoundPage;