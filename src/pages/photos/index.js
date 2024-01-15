import React from "react";
import Seo from "../../components/seo/seo";
import Layout from "../../components/layout/layout";
import * as style from "./style.module.css";
import CommonBlue from "../../../static/photos/CommonBlue.jpg";
import Alps from "../../../static/photos/Alps.jpg";
import Harvest from "../../../static/photos/Harvest.jpg";
import GreatWillowHerb from "../../../static/photos/GreatWillowHerb.jpg";
import Sunset from "../../../static/photos/Sunset.jpg";
import Rockpools from "../../../static/photos/Rockpools.jpg";
import Peninsula from "../../../static/photos/Peninsula.jpg";
import Beach from "../../../static/photos/Beach.jpg";
import Alpine from "../../../static/photos/Alpine.jpg";
import Castle from "../../../static/photos/Castle.jpg";
import Door from "../../../static/photos/Door.jpg";
import Forest from "../../../static/photos/Forest.jpg";

const Photos = () => {
  return (
    <Layout>
      <div>
        <h2 className={style.photosTitle}>Photos</h2>
        <div className={style.gallery}>
          <div>
            <a href={CommonBlue}>
              <img
                className={style.galleryImage}
                src={CommonBlue}
                alt="CommonBlue"
              />
            </a>
          </div>
          <div>
            <a href={Alps}>
              <img className={style.galleryImage} src={Alps} alt="Alps" />
            </a>
          </div>
          <div>
            <a href={Harvest}>
              <img
                className={style.galleryImage}
                src={Harvest}
                alt="Harvest"
              />
            </a>
          </div>
          <div>
            <a href={GreatWillowHerb}>
              <img
                className={style.galleryImage}
                src={GreatWillowHerb}
                alt="GreatWillowHerb"
              />
            </a>
          </div>
          <div>
            <a href={Sunset}>
              <img className={style.galleryImage} src={Sunset} alt="Sunset" />
            </a>
          </div>
          <div>
            <a href={Rockpools}>
              <img
                className={style.galleryImage}
                src={Rockpools}
                alt="Rockpools"
              />
            </a>
          </div>
          <div>
            <a href={Peninsula}>
              <img
                className={style.galleryImage}
                src={Peninsula}
                alt="Peninsula"
              />
            </a>
          </div>
          <div>
            <a href={Beach}>
              <img className={style.galleryImage} src={Beach} alt="Beach" />
            </a>
          </div>
          <div>
            <a href={Alpine}>
              <img className={style.galleryImage} src={Alpine} alt="Alpine" />
            </a>
          </div>
          <div>
            <a href={Castle}>
              <img className={style.galleryImage} src={Castle} alt="Castle" />
            </a>
          </div>
          <div>
            <a href={Door}>
              <img className={style.galleryImage} src={Door} alt="Door" />
            </a>
          </div>
          <div>
            <a href={Forest}>
              <img className={style.galleryImage} src={Forest} alt="Forest" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo page="Photos" />;

export default Photos;