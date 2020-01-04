import React, { useRef, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { MdAlarm, MdContentPaste } from "react-icons/md";
import { TweenLite, Power3} from "gsap";
import Layout from "../components/Layout";

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
      <h2>Merhaba</h2>
    </Layout>
  );
};

export default Home;
