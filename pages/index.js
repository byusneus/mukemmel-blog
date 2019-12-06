import React, {useRef, useEffect} from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layouts/Layout";
import { TweenMax, Power3 } from "gsap";

const Home = ({posts}) => {

  let logoItem = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      logoItem,
      .8,
      {
        opacity: 0,
        x: -400,
        ease: Power3.easeOut
      },
      {
        opacity: 1,
        x: 0,
      }
    )
  });

  return(
   <Layout>
      <div className="container">
    

    <div className="hero">
      <h1 ref={el => {logoItem = el}} className="hero-title">Selman Kahya</h1>
      <div className="hero-social-links">
        
      </div>
    </div>
    <button onMouseUp={() => console.log("alert")}>Butoooooon</button>

    {posts.map( (post) => (
      <div key={post.slug} className="blog">
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date">{post.date}</div>
      </div>
    ))}

    <style jsx>{`
      .container {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }

      .hero {
        text-align: center;
        margin: 96px 0;
      }

      .social-link {
        margin-right: 8px;
      }

      .hero-title {
        font-size: 48px;
        opacity: 0;
      }

      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
      }

      a {
        color: #35459e;
        text-decoration: none;
      }
    `}</style>
  </div>
   </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
