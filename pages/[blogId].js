import React, { useRef, useEffect, useState} from "react";
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
    description: feed.text
  }

  const [hover, setHover] = useState(false);

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
            <div className="blog-title"><h2>{feed.title}</h2></div>
            <div className="blog-text" dangerouslySetInnerHTML={{ __html: state.description }}></div>
          </div>
          <div className="line"></div>
          <div className="suggest-container">
            <h3 className="suggest-title">Bu Yazılara da Bakabilirsiniz</h3>
            <div className="suggest-box">
              <div className="suggest-blog">
                <img src={computer} />
                <div className="blog-description">
                  <p className="blog-title">BLOG TITLE SAMPLE</p>
                  <p className="blog-subtitle">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                  <p className="blog-date">8.1.2020</p>
                </div>
              </div>
              <div className="suggest-blog">
                <img src={computer} />
                <div className="blog-description">
                  <p className="blog-title">BLOG TITLE SAMPLE</p>
                  <p className="blog-subtitle">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                  <p className="blog-date">8.1.2020</p>
                </div>
              </div>
              <div className="suggest-blog">
                <img src={computer} />
                <div className="blog-description">
                  <p className="blog-title">BLOG TITLE SAMPLE</p>
                  <p className="blog-subtitle">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                  <p className="blog-date">8.1.2020</p>
                </div>
              </div>
            </div>
          </div>

          <div id="line-two" className="line two"></div>
          <Controller>
            <Scene
               triggerElement="#line-two"
               offset={-600}
               duration={500}
            >
              <Tween
                wrapper={<div className="share" />}
                staggerFrom={{
                  opacity: 0,
                  y: -50,
                  ease: Power3.easeOut
                }}
                stagger={0.15}
                ease="Strong.easeOut"
                totalProgress={1000}
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
  const result = await firestore.collection("bloglar").where("slug", "==", query.blogId).get();

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
