import React, { useRef, useEffect, useState } from "react";
import styles from '../styles/Categories.scss';
import { TweenLite, Power3} from "gsap";

const Categories = () => {

    let categories = useRef(null);

    useEffect(() => {
        TweenLite.staggerFrom(categories.children, .8, {
            opacity: 0,
            y: 60,
            ease: Power3.easeOut
        }, .25);
    }, []);

    return(
        <section id="categories-section">
        <div className="container">
          <div className="categories-container">
            <h2 className="categories-title">TARİF KATEGORİLERİ</h2>
            <div ref={el => {categories = el}} className="row-category">
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
        <style jsx>{styles}</style>
      </section>
    )
}

export default Categories;