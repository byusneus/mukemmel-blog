import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Head from "../components/Head";
import styles from '../styles/Home.scss';
import { MdAlarm, MdContentPaste } from "react-icons/md";
import { TweenMax, Power3 } from "gsap";

const Home = () => {

  let logoItem = useRef(null);

  useEffect(() => {

  });

  return (
    <div className="container">
      <Head title="Home" />

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
          <hr className="header-hr" />
        </div>
      </header>

      <section id="banner">
        <div className="row">
          <div className="box">
            <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div className="food-info">
              <div className="food-title">
                <h3>Bir Buse Yemeği 1</h3>
                <span>Lorem ipsum merhaba dünya</span>
              </div>
              <div className="food-details">
                <div className="cooking-information">
                  <div className="cooking-time">
                    <MdAlarm color="white" fontSize="26" />
                    <span className="cooking-information-article">30 min.</span>
                  </div>
                  <div className="cooking-time">
                    <MdContentPaste color="white" fontSize="26" />
                    <span className="cooking-information-article">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div className="food-info">
              <div className="food-title">
                <h3>Bir Buse Yemeği 1</h3>
                <span>Lorem ipsum merhaba dünya</span>
              </div>
              <div className="food-details">
                <div className="cooking-information">
                  <div className="cooking-time">
                    <MdAlarm color="white" fontSize="26" />
                    <span className="cooking-information-article">30 min.</span>
                  </div>
                  <div className="cooking-time">
                    <MdContentPaste color="white" fontSize="26" />
                    <span className="cooking-information-article">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div className="food-info">
              <div className="food-title">
                <h3>Bir Buse Yemeği 1</h3>
                <span>Lorem ipsum merhaba dünya</span>
              </div>
              <div className="food-details">
                <div className="cooking-information">
                  <div className="cooking-time">
                    <MdAlarm color="white" fontSize="26" />
                    <span className="cooking-information-article">30 min.</span>
                  </div>
                  <div className="cooking-time">
                    <MdContentPaste color="white" fontSize="26" />
                    <span className="cooking-information-article">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div className="food-info">
              <div className="food-title">
                <h3>Bir Buse Yemeği 1</h3>
                <span>Lorem ipsum merhaba dünya</span>
              </div>
              <div className="food-details">
                <div className="cooking-information">
                  <div className="cooking-time">
                    <MdAlarm color="white" fontSize="26" />
                    <span className="cooking-information-article">30 min.</span>
                  </div>
                  <div className="cooking-time">
                    <MdContentPaste color="white" fontSize="26" />
                    <span className="cooking-information-article">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div className="food-info">
              <div className="food-title">
                <h3>Bir Buse Yemeği 1</h3>
                <span>Lorem ipsum merhaba dünya</span>
              </div>
              <div className="food-details">
                <div className="cooking-information">
                  <div className="cooking-time">
                    <MdAlarm color="white" fontSize="26" />
                    <span className="cooking-information-article">30 min.</span>
                  </div>
                  <div className="cooking-time">
                    <MdContentPaste color="white" fontSize="26" />
                    <span className="cooking-information-article">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section id="categories-section">
        <div className="container">
          <div className="categories-container">
            <h2 className="categories-title">TARİF KATEGORİLERİ</h2>
            <div className="row-category">
              <div className="c-box">
                <div className="c-img">
                  <img src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <span>ÇORBA</span>
                <div className="recipe-number">
                  <span>192 Tarif</span>
                </div>
              </div>
              <div className="c-box">
                <div className="c-img">
                  <img src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <span>ÇORBA</span>
                <div className="recipe-number">
                  <span>192 Tarif</span>
                </div>
              </div>
              <div className="c-box">
                <div className="c-img">
                  <img src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <span>ÇORBA</span>
                <div className="recipe-number">
                  <span>192 Tarif</span>
                </div>
              </div>
              <div className="c-box">
                <div className="c-img">
                  <img src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <span>ÇORBA</span>
                <div className="recipe-number">
                  <span>192 Tarif</span>
                </div>
              </div>
              <div className="c-box">
                <div className="c-img">
                  <img src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <span>ÇORBA</span>
                <div className="recipe-number">
                  <span>192 Tarif</span>
                </div>
              </div>
              <div className="c-box">
                <div className="c-img">
                  <img src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <span>ÇORBA</span>
                <div className="recipe-number">
                  <span>192 Tarif</span>
                </div>
              </div>
              <div className="c-box">
                <div className="c-img">
                  <img src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <span>ÇORBA</span>
                <div className="recipe-number">
                  <span>192 Tarif</span>
                </div>
              </div>
              <div className="c-box">
                <div className="c-img">
                  <img src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <span>ÇORBA</span>
                <div className="recipe-number">
                  <span>192 Tarif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="most-liked-recipes">
        <div className="carousel">
          adsdads
        </div>
      </section>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Home;
