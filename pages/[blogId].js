import React, { useRef, useEffect, useState } from "react";
import Head from "../components/Head";
import Link from "next/link";
import firestore from "../common/firestore";
import styles from "../styles/blog.scss"
import { TweenLite, Power3 } from "gsap";
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import reddit from "../images/reddit.png";
import linkedin from "../images/linkedin.png";
import Loader from 'react-loader-spinner'


const BlogPost = ({ feed, blogId, randomBlogs }) => {
  const state = {
    description: feed.text
  }

  const [hover, setHover] = useState(false);

  let blogImage = useRef(null);
  let blogBg = useRef(null);

  // useEffect(() => {
  //   TweenLite.from(blogImage, 1, {
  //     opacity: 0,
  //     ease: Power3.easeIn
  //   })
  //   TweenLite.from(blogBg, 1, {
  //     delay: .5,
  //     opacity: 0,
  //     y: 100,
  //     ease: Power3.easeInOut
  //   })
  // }, []);

  return (
    <div>
      {feed === null ? <div className="loader">
        <Loader
          type="Rings"
          color="#303030"
          height={120}
          width={120}
        />
      </div>
        : <div>
          <Head title={feed.title} />
          <div className="blog-main">
            <div ref={el => { blogImage = el }} className="blog-img">
              <img src={feed.mainPicture} />
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
                  {randomBlogs.map((blog, index) => (
                    <Link href="/[blogId]" as={`/${blog.slug}`}>
                      <a>
                        <div key={index} className="suggest-blog">
                          <img src={blog.mainPicture} />
                          <div className="blog-description">
                            <p className="blog-title">{blog.title}</p>
                            <p className="blog-subtitle">{blog.title}</p>
                            <p className="blog-date">{blog.date}</p>
                          </div>
                        </div>
                      </a>
                    </Link>

                  ))}
                </div>
              </div>

              <div id="line-two" className="line two"></div>
              <div className="share">
                <a className="share-btn" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.development}/${blogId}`}><img src={facebook} /></a>
                <a className="share-btn" target="_blank" href={`https://twitter.com/share?url=${process.env.development}/${blogId}&text=${feed.slug}via=@yunus_alpak`}><img src={twitter} /></a>
                <a className="share-btn" target="_blank" href={`https://reddit.com/submit?url=${process.env.development}/${blogId}&title=${feed.slug}`}><img src={reddit} /></a>
                <a className="share-btn" target="_blank" href={`https://www.linkedin.com/shareArticle?url=${process.env.development}/${blogId}&title=${feed.slug}`}><img src={linkedin} /></a>
              </div>
            </div>
          </div>
        </div>
      }
      <style jsx>{styles}</style>
    </div>
  )

}

BlogPost.getInitialProps = async ({ req, query }) => {
  const res = await firestore.collection("bloglar").where("slug", "==", `${query.blogId}`).get();
  let blog = null;
  res.forEach((doc) => {
    blog = doc.data();
  })
  const result = await firestore.collection("bloglar").get();
  let bloglar = [];
  let randomBlogs = [];
  result.forEach(doc => {
    if (doc.data().slug !== query.blogId)
      bloglar.push(doc.data());
  })

  if (bloglar.length >= 3) {
    for (let i = 0; i < 3; i++) {
      var min = 0;
      var max = bloglar.length;
      var randomValue = Math.floor(Math.random() * (max - min + 1) + min);
      randomBlogs.push(bloglar[randomValue]);
    }
  } else {
    for (let i = 0; i < bloglar.length; i++)
      randomBlogs[i] = bloglar[i];
  }

  return {
    feed: blog,
    blogId: query.blogId,
    randomBlogs: randomBlogs
  }
};

export default BlogPost;
