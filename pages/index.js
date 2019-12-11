import React, {useRef, useEffect} from "react";
import Link from "next/link";
import Head from "../components/Head";
import styles from '../styles/Home.scss';
import { TweenMax, Power3 } from "gsap";

const Home = () => {

  let logoItem = useRef(null);

  useEffect(() => {
    
  });

  return(
   <div className="container">
      <Head title="Home"/>

      <header id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="header-inner">
              <div className="logo">BUSE</div>
              <div className="navigation">
                <nav>
                  <ul>
                    <li><Link href="/"><a>About</a></Link></li>
                    <li><Link href="/"><a>About</a></Link></li>
                    <li><Link href="/"><a>About</a></Link></li>
                    <li><Link href="/"><a>About</a></Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <hr className="header-hr"/>
        </div>
      </header>
      <section id="banner">
        <div className="row">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </section>
    <style jsx>{styles}</style>
   </div>
  );
};

export default Home;
