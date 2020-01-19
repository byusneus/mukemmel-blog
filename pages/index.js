import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { TimelineLite, Power3 } from "gsap";
import { motion } from "framer-motion";
import styles from "../styles/home.scss";
import Loader from 'react-loader-spinner'
import firestore from "../common/firestore";
import Head from "../components/Head";

const Home = ({ blogList }) => {

  let blogListHtml = useRef(null);
  let pagination = useRef(null);

  const [pageCount, setPageCount] = useState(0);
  
  return (
    <div className="main-page">
      <Head title="Anasayfa - yunusemrealpak.com" />
      {blogList == null
        ? <div>
          <Loader
            type="Rings"
            color="#303030"
            height={100}
            width={100}
          />
        </div>
        : <div className="blogs">

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
      }

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
