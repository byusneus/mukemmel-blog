import React, { useRef, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { MdAlarm, MdContentPaste } from "react-icons/md";
import { TweenLite, Power3} from "gsap";
import Layout from "../components/Layout";
import styles from "../styles/home.scss";

const Home = () => {
  const router = useRouter();

  const routePost = () => {
    router.push({
      pathname: '/tarif',
      query: { slug: 'Deneme' },
    })
  }

  return (
    <Layout>
      {/* <div className="main-page">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
        <div className="box">6</div>
        <div className="box">7</div>
        <div className="box">8</div>
      </div> */}
      <style jsx>{styles}</style>
    </Layout>
  );
};

export default Home;
