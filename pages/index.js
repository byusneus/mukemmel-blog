import React, { useRef, useEffect, useState } from "react";
import Router from 'next/router';
import Link from "next/link";
import { MdAlarm, MdContentPaste } from "react-icons/md";
import { TweenLite, Power3 } from "gsap";
import { motion } from "framer-motion";
import styles from "../styles/home.scss";
import computer from "../images/computer.jpg"
import code from "../images/code.png"
import code2 from "../images/code2.jpg"
import next from "../images/next.png"

const Home = () => {

  let blogList = useRef(null);
  let pagination = useRef(null);

  useEffect(() => {
    TweenLite.staggerFrom(blogList.children, 1, {
      opacity: 0,
      ease: Power3.easeIn
    }, .1)
      .staggerFrom(pagination.children, .5, {
        opacity: 0,
        y: -30,
        ease: Power3.easeIn
      }, .25, "-=1")
  }, []);

  return (
      <div className="main-page">
        <div ref={el => { blogList = el }} className="blogs">
          <div className="blog-box">
            <img src={computer} />
            <div className="blog-summary">
              <p>BLOG TITLE SAMPLE</p>
              <Link href="/[blogId]" as="/Deneme"><a className="btn">Devamını Oku</a></Link>
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
        <style jsx>{styles}</style>
      </div>
      


  );
};

export default Home;
