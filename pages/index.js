import React, { useRef, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { MdAlarm, MdContentPaste } from "react-icons/md";
import { TweenLite, Power3} from "gsap";

const Home = () => {
  const router = useRouter();

  const routePost = () => {
    router.push({
      pathname: '/tarif',
      query: { slug: 'Deneme' },
    })
  }

  return (
    <div className="container">
      <h2>Tekrar Başlayalım</h2>
      {/* <style jsx>{styles}</style> */}
    </div>
  );
};

export default Home;
