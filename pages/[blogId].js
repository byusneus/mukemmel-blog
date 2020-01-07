import React, { useRef, useEffect, useState } from "react";
import Head from "../components/Head";
import firebase from "../common/firebase";
import firestore from "../common/firestore";
import computer from "../images/computer.jpg";
import styles from "../styles/blog.scss"
import { TweenLite, Power3 } from "gsap";

const BlogPost = ({ feed, query }) => {
  const state = {
    description: feed.title
  }

  let blogImage = useRef(null);
  let blogBg = useRef(null);

  useEffect(() => {
    TweenLite.from(blogImage, 1, {
      opacity: 0,
      ease: Power3.easeIn
    })
    TweenLite.from(blogBg, 1, {
      delay: .5,
      opacity:0,
      y: 100,
      ease: Power3.easeInOut
    })
  }, []);

  return (
    <div>
      <Head title={feed.slug}/>
      <div className="blog-main">
      <div ref={el => {blogImage = el}} className="blog-img">
        <img src={computer} />
      </div>
      <div ref={el => {blogBg = el}} className="blog-container">
        <div dangerouslySetInnerHTML={{ __html: state.description }}></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <style jsx>{styles}</style>
    </div>
    </div>
  )

}

BlogPost.getInitialProps = async ({ req, query }) => {
  const result = await firestore.collection("tarifler").where("slug", "==", query.blogId).get();

  const newFeeds = [];
  result.forEach(doc => {
    newFeeds.push(doc.data());
  })

  return {
    feed: newFeeds[0]
  }
};

export default BlogPost;
