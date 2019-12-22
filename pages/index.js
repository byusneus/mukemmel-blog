import React, { useRef, useEffect } from "react";

import Head from "../components/Head";
import styles from '../styles/Home.scss';
import { MdAlarm, MdContentPaste} from "react-icons/md";
import PopularRecipes from "../components/PopularRecipes";
import Categories from "../components/Categories";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="container">
      <Head title="Home" />

      <Header/>

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
