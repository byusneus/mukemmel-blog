import React from "react";
import firebase from "../common/firebase";
import firestore from "../common/firestore";

const BlogPost = ({ feed, query }) => {
    const state = {
        description: feed.title
    }
    
    return (
      <div className="container">
        <h2>{feed.slug}</h2>
        <h2>{feed.title}</h2>
        <div dangerouslySetInnerHTML={{__html: state.description}}></div>
      </div>
    )

} 

BlogPost.getInitialProps = async ({ req, query }) => {
    const result = await firestore.collection("tarifler").where("slug", "==", query.slug).get();

    const newFeeds = [];
    result.forEach(doc => {
      newFeeds.push(doc.data());
    })

    return {
      feed: newFeeds[0],
      query: query.slug
    }
};

export default BlogPost;
