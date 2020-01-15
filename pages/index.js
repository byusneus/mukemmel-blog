import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { MdAlarm, MdContentPaste } from "react-icons/md";
import { TweenLite, Power3 } from "gsap";
import { motion } from "framer-motion";
import styles from "../styles/home.scss";
import computer from "../images/computer.jpg"
import code from "../images/code.png"
import code2 from "../images/code2.jpg"
import next from "../images/next.png"
import firestore from "../common/firestore";
import { TimelineLite } from "gsap";

const Home = ({ blogList }) => {

  let blogListHtml = useRef(null);
  let pagination = useRef(null);

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    var tl = new TimelineLite();
    tl.to(blogListHtml, 1.5, {
      opacity: 1,
      ease: Power3.linear
    }).staggerFrom(pagination.children, .5, {
      opacity: 0,
      y: -30,
      ease: Power3.easeIn
    }, .25)
  }, []);

  return (
    <div className="main-page">
      {blogList == null ? <h2>Loading</h2> : null}
      <div ref={el => { blogListHtml = el }} className="blogs">

        {blogList.map((blog, index) => (
          <div key={index} className="blog-box">
            <img src={blog.mainPicture} />
            <div className="blog-summary">
              <p>{blog.title}</p>
              <Link href="/[blogId]" as={`/${blog.slug}`}><a className="btn">Devamını Oku</a></Link>
            </div>
          </div>
        ))}

      </div>
      {/* <div ref={el => { pagination = el }} className="pagination">
        <div className="page"><img src={next} /></div>
          
        <div className="page"><img src={next} /></div>
      </div> */}
      <style jsx>{styles}</style>
    </div>



  );
};

Home.getInitialProps = async ({ req, query }) => {
  const querysnapshot = await firestore.collection("bloglar").get();
  var list = [];
  querysnapshot.forEach(doc => {
    list.push(doc.data());
  });

  return {
    blogList: list
  }
};

export default Home;
