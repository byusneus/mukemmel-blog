import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Head from "../components/Head";
import dynamic from "next/dynamic";
import styles from '../styles/Home.scss';
import { MdAlarm, MdContentPaste} from "react-icons/md";
import PopularRecipes from "../components/PopularRecipes";
import Categories from "../components/Categories";

const popularRecipes = [
  {
    title: "Bir Buse Yemeği",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    created: "20/09/2019"
  },
  {
    title: "Bir Buse Yemeği",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    created: "20/09/2019"
  },
  {
    title: "Bir Buse Yemeği",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    created: "20/09/2019"
  }
]

const Home = () => {

  let logoItem = useRef(null);
  

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

      <Categories/>

      <PopularRecipes/>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Home;
