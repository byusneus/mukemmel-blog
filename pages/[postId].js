import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import firebase from "../common/firebase";
import firestore from "../common/firestore";

class Posts {
  feeds = [] 
}

class BlogPost extends React.Component {

  posts = new Posts();

  static async getInitialProps(){
    const result = await firestore.collection("tarifler").get();

    const newFeeds = [];
    result.forEach(doc => {
      newFeeds.push(doc.data());
    })

    return {
      feeds: newFeeds
    }
  }

  constructor( props ){
    super( props );
    
      this.posts.feeds = props.feeds;
  }

  render(){
    return (
      <div className="container">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2>{this.posts.feeds.length}</h2>
        {/* <div className="blog">
          <h2 className="blog-title">
            <Link href="/test">
              <a className="blog-title-link">{post.title}</a>
            </Link>
          </h2>
          <div className="blog-text">
            <ReactMarkdown source={post.details} />
          </div>
          <div className="blog-date">{post.date}</div>
        </div>
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
        `}</style> */}
      </div>
    );
  }

} 

// BlogPost.getInitialProps = async ({ req, query }) => {
//   const res = {};
//   firestore.collection("tarifler").where("alt-title", "==", "merhaba").get().then((querySnapshot) => {
//     querySnapshot.forEach(function (doc) {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//       res = doc.data();
      
//     });
    
//   });
//   return { post: res };
// };

export default BlogPost;
