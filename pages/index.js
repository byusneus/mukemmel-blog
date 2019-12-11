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
              <div className="logo">BUSEM</div>
              <div className="navigation">
                <nav>
                  <ul>
                    <li><Link href="/"><a>Anasayfa</a></Link></li>
                    <li><Link href="/"><a>Kategoriler</a></Link></li>
                    <li><Link href="/"><a>Yemeğin Hikayesi</a></Link></li>
                    <li><Link href="/"><a>Hakkımda</a></Link></li>
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
          <div className="box">
            <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            <div className="food-info">
              <div className="food-title">
                <h3>Bir Buse Yemeği</h3>
                <span>Lorem ipsum merhaba dünya</span>
              </div>
              <div className="food-details">

              </div>
            </div>
          </div>
          <div className="box">
              <img src="https://images.pexels.com/photos/2662875/pexels-photo-2662875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
              <div className="food-info">
                <div className="food-title">
                  <h3>Bir Buse Yemeği</h3>
                  <span>Lorem ipsum merhaba dünya</span>
                </div>
                <div className="food-details">
                  
                </div>
              </div>
          </div>
          <div className="box">
          <img src="https://images.pexels.com/photos/2059193/pexels-photo-2059193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            <div className="food-info">
              <div className="food-title">
                <h3>Bir Buse Yemeği</h3>
                <span>Lorem ipsum merhaba dünya</span>
              </div>
              <div className="food-details">
                
              </div>
            </div>
          </div>
          <div className="box">
          <img src="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            <div className="food-info">
              <div className="food-title">
                <h3>Bir Buse Yemeği</h3>
                <span>Lorem ipsum merhaba dünya</span>
              </div>
              <div className="food-details">
                
              </div>
            </div>
          </div>
          <div className="box">
          <img src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            <div className="food-info">
              <div className="food-title">
                <h3>Bir Buse Yemeği</h3>
                <span>Lorem ipsum merhaba dünya</span>
              </div>
              <div className="food-details">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    <style jsx>{styles}</style>
   </div>
  );
};

export default Home;
