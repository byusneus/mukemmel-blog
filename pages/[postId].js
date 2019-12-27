import React from "react";
import Head from "next/head";
import firebase from "../common/firebase";
import firestore from "../common/firestore";

const BlogPost = ({ feed, query }) => {
  console.log(feed);
    return (
      <div className="container">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2>{feed.slug}</h2>
        <h2>{feed.title}</h2>
      </div>
    )

} 

BlogPost.getInitialProps = async ({ req, query }) => {
    const result = await firestore.collection("tarifler").where("slug", "==", query.name).get();

    const newFeeds = [];
    result.forEach(doc => {
      newFeeds.push(doc.data());
    })

    return {
      feed: newFeeds[0],
      query: query.name
    }
};

export default BlogPost;
