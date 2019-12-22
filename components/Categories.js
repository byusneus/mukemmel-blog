import React, { useRef, useEffect, useState } from "react";
import styles from '../styles/Categories.scss';
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

const Categories = () => {

  let categories = useRef(null);

  useEffect(() => {
    // TweenLite.staggerFrom(categories.children, .8, {
    //     opacity: 0,
    //     y: 60,
    //     ease: Power3.easeOut
    // }, .25);
  }, []);

  return (
    <section id="categories-section">
      <div className="container">
        <div className="categories-container">
          <h2 id="categories-title" className="categories-title">TARİF KATEGORİLERİ</h2>
          <Controller >
            <Scene
              triggerElement="#categories-title"
              offset={0}
              duration={700}
              reverse={false}
              pin={false}
            >
              <Tween
                wrapper={<div className="row-category" />}
                staggerFrom={{
                  opacity: 0,
                  y: 60,
                  ease: Power3.easeOut
                }}
                stagger={0.15}
              >
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
              </Tween>
            </Scene>
          </Controller>
        </div>
      </div>
      <style jsx>{styles}</style>
    </section>
  )
}

export default Categories;