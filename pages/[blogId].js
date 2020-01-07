import React, { useRef, useEffect, useState } from "react";
import Head from "../components/Head";
import firebase from "../common/firebase";
import firestore from "../common/firestore";
import computer from "../images/computer.jpg";
import styles from "../styles/blog.scss"
import { TweenLite, Power3 } from "gsap";
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import reddit from "../images/reddit.png";
import linkedin from "../images/linkedin.png";

const BlogPost = ({ feed, blogId }) => {
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
      opacity: 0,
      y: 100,
      ease: Power3.easeInOut
    })
  }, []);

  return (
    <div>
      <Head title={feed.slug} />
      <div className="blog-main">
        <div ref={el => { blogImage = el }} className="blog-img">
          <img src={computer} />
        </div>
        <div ref={el => { blogBg = el }} className="blog-container">
          <div className="blog-content">
            <div dangerouslySetInnerHTML={{ __html: state.description }}></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div id="line-one" className="line"></div>
          <div className="blog-comment">
                <div> Comment </div>
          </div>
          <div className="line"></div>
          <Controller>
            <Scene
              triggerElement="#line-one"
              offset={-400}
              duration={800}
              reverse={true}
              pin={false}
              >
              <Tween
                wrapper={<div className="share" />}
                staggerFrom={{
                  opacity: 0,
                  y: -50,
                  ease: Power3.easeOut
                }}
                stagger={0.15}
              >
                <a className="share-btn" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.development}/${blogId}`}><img src={facebook} /></a>
                <a className="share-btn" target="_blank" href={`https://twitter.com/share?url=${process.env.development}/${blogId}&text=${feed.slug}via=@yunus_alpak`}><img src={twitter} /></a>
                <a className="share-btn" target="_blank" href={`https://reddit.com/submit?url=${process.env.development}/${blogId}&title=${feed.slug}`}><img src={reddit} /></a>
                <a className="share-btn" target="_blank" href={`https://www.linkedin.com/shareArticle?url=${process.env.development}/${blogId}&title=${feed.slug}`}><img src={linkedin} /></a>

              </Tween>
            </Scene>
          </Controller>
        </div>
        
      </div>
      <style jsx>{styles}</style>
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
    feed: newFeeds[0],
    blogId: query.blogId
  }
};

export default BlogPost;
