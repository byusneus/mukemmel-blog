import React, { useRef, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { MdAlarm, MdContentPaste } from "react-icons/md";
import { TweenLite, Power3 } from "gsap";
import { motion } from "framer-motion";
import styles from "../styles/home.scss";
import computer from "../images/computer.jpg"
import code from "../images/code.png"
import code2 from "../images/code2.jpg"
import next from "../images/next.png"

const Home = () => {
  const router = useRouter();

  let blogList = useRef(null);
  let pagination = useRef(null);

  useEffect(() => {
    TweenLite.staggerFrom(blogList.children, .5, {
      delay: 5,
      opacity: 0,
      ease: Power3.easeIn
    }, .1)
      .staggerFrom(pagination.children, .5, {
        opacity: 0,
        y: -30,
        ease: Power3.easeIn
      }, .25, "-=1")
  }, []);

  const routePost = () => {
    router.push({
      pathname: '/dashboard',
      query: { slug: 'Deneme' },
    })
  }

  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <div className="main-page">
        <div ref={el => { blogList = el }} className="blogs">
          <div className="blog-box">
            <img src={computer} />
            <div className="blog-summary">
              <p>BLOG TITLE SAMPLE</p>
              <button className="btn" onClick={routePost}>Devamını Oku</button>
            </div>
          </div>
          <div className="blog-box">
            <img src={code} />
            <div className="blog-summary">
              <p>BLOG TITLE SAMPLE</p>
              <button className="btn">Devamını Oku</button>
            </div>
          </div>
          <div className="blog-box">
            <img src={code2} />
            <div className="blog-summary">
              <p>BLOG TITLE SAMPLE</p>
              <button className="btn">Devamını Oku</button>
            </div>
          </div>
          <div className="blog-box">
            <img src={computer} />
            <div className="blog-summary">
              <p>BLOG TITLE SAMPLE</p>
              <button className="btn">Devamını Oku</button>
            </div>
          </div>
          <div className="blog-box">
            <img src={code2} />
            <div className="blog-summary">
              <p>BLOG TITLE SAMPLE</p>
              <button className="btn">Devamını Oku</button>
            </div>
          </div>
          <div className="blog-box">
            <img src={code2} />
            <div className="blog-summary">
              <p>BLOG TITLE SAMPLE</p>
              <button className="btn">Devamını Oku</button>
            </div>
          </div>
          <div className="blog-box">
            <img src={code2} />
            <div className="blog-summary">
              <p>BLOG TITLE SAMPLE</p>
              <button className="btn">Devamını Oku</button>
            </div>
          </div>
          <div className="blog-box">
            <img src={code2} />
            <div className="blog-summary">
              <p>BLOG TITLE SAMPLE</p>
              <button className="btn">Devamını Oku</button>
            </div>
          </div>
        </div>
        <div ref={el => { pagination = el }} className="pagination">
          <div className="page"><img src={next} /></div>
          <div className="page">1</div>
          <div className="page">2</div>
          <div className="page">3</div>
          <div className="page"><img src={next} /></div>
        </div>

      </div>
      <style jsx>{styles}</style>
    </motion.div>


  );
};

export default Home;
