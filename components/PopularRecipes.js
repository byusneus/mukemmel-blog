import React, { useRef, useEffect, useState } from "react";
import styles from '../styles/PopularRecipes.scss';
import { TweenLite, Power3} from "gsap";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdFlashOff } from "react-icons/md";

const popularRecipes = [
    {
      title: "Bir Buse Yemeği 1",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      created: "20/09/2019"
    },
    {
      title: "Bir Buse Yemeği 2",
      image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      created: "20/09/2019"
    },
    {
      title: "Bir Buse Yemeği 3",
      image: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      created: "20/09/2019"
    }
  ]

const PopularRecipes = () => {
    let circle = useRef(null);
    let imageList = useRef(null);
    let popularRecipesList = useRef(null);

    const imageWidth = 350;

    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
        clickable: true
    });

    useEffect(() => {
        TweenLite.to(popularRecipesList.children[0],0,{
        opacity:1
        })
    }, []);

    const slideLeft = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {
            x: -imageWidth * multiplied,
            ease: Power3.easeOut
        });
    };

    const slideRight = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {
            x: imageWidth * multiplied,
            ease: Power3.easeOut
        });
    };

    const scale = (index, duration, amount = 1.2) => {
        TweenLite.from(imageList.children[index], duration, {
            scale: amount,
            ease: Power3.easeOut
        });
    }

    const fadeOut = (index, duration, opacity = 0) => {
        TweenLite.to(popularRecipesList.children[index], duration, {
            opacity: opacity
        });
    }

    const fadeIn = (index, duration, delay = .6, opacity = 1) => {
        TweenLite.to(popularRecipesList.children[index], duration, {
            opacity: opacity,
            delay : delay
        });
    }

    const nextSlide = () => {
        if(imageList.children[0].classList.contains("active")){
            setState({isActive1:false, isActive2:true, isActive3:false, clickable: false})
            
            slideLeft(0, 1);
            slideLeft(1, 1);
            scale(1, 1);
            slideLeft(2, 1);
            slideLeft(2, 0);
            fadeOut(0, 1);
            fadeIn(1, 1);

            
            setTimeout(() => setState({isActive1:false, isActive2:true, isActive3:false, clickable: true}),1200);
            console.log(state);

        }else if(imageList.children[1].classList.contains("active")){
            setState({isActive1:false, isActive2:false, isActive3:true, clickable: false})

            //Image transition
            slideRight(0, 1);
            slideLeft(1, 1, 2);
            slideLeft(2, 1, 2);
            scale(2, 1);
            //content transition
            fadeOut(1, 1);
            fadeIn(2, 1);

            setTimeout(() => setState({isActive1:false, isActive2:false, isActive3:true, clickable: true}),1200);
            console.log(state);
        }else {
            setState({isActive3:false, isActive1:true, isActive2:false, clickable: false})

            //Image transition
            slideLeft(2, 1, 3);
            slideLeft(0, 1, 0);
            slideLeft(1, 0, 0);
            scale(0, 1);
            //content transition
            fadeOut(2, 1);
            fadeIn(0, 1);

            setTimeout(() => setState({isActive3:false, isActive1:true, isActive2:false, clickable: true}),1200);
            console.log(state);
        }
    }

    const prevSlide = () => {
        if(imageList.children[0].classList.contains("active")){
            setState({isActive1:false, isActive3:true, isActive2:false, clickable: false})
            //Image transition
            slideLeft(2, 0, 3);
            slideLeft(2, 1, 2);
            scale(2, 1);
            slideRight(0, 1);
            slideRight(1, 1);
            //content transtion
            fadeOut(0, 1);
            fadeIn(2, 1);;

            setTimeout(() => setState({isActive1:false, isActive3:true, isActive2:false, clickable: true}),1200);
            console.log(state);

        }else if(imageList.children[1].classList.contains("active")){
            setState({isActive1:true, isActive2:false, isActive3:false, clickable: false})

            //Image transition
            slideLeft(0, 0);
            slideRight(0, 1, 0);
            slideRight(1, 1, 0);
            slideRight(2, 1, 2);
            scale(0, 1);
            //content transtion
            fadeOut(1, 1);
            fadeIn(0, 1);

            setTimeout(() => setState({isActive1:true, isActive2:false, isActive3:false, clickable: true}),1200);
            console.log(state);
        }else {
            setState({isActive3:false, isActive2:true, isActive1: false, clickable: false})
            slideLeft(2, 1);
            slideLeft(1, 0, 2);
            slideLeft(1, 1);
            scale(1, 1);
            //content transtion
            fadeOut(2, 1);
            fadeIn(1, 1);

            setTimeout(() => setState({isActive3:false, isActive2:true, isActive1: false, clickable: true}),1200);
            console.log(state);
        }
    }
 
    return(
        <section id="most-liked-recipes">
        <div className="popular-area">
          <h2 className="popular-title">POPULAR TARİFLER</h2>
          <div ref = {el => {circle = el}} className="popular-section">
              <div className="popular-container">
                  <div onClick={state.clickable ? prevSlide : null} className="arrows left">
                    <span>
                      <MdKeyboardArrowLeft fontSize={30}/>
                    </span>
                  </div>
                  <div className="inner">
                    <div className="p-image">
                        <ul ref = {el => {imageList = el}}>
                          <li className={state.isActive1 ? "active" : ""}>
                            <img src={popularRecipes[0].image} alt={popularRecipes[0].title} />
                          </li>
                          <li className={state.isActive2 ? "active" : ""}>
                            <img src={popularRecipes[1].image} alt={popularRecipes[1].title} />
                          </li>
                          <li className={state.isActive3 ? "active" : ""}>
                            <img src={popularRecipes[2].image} alt={popularRecipes[2].title} />
                          </li>
                        </ul>
                    </div>
                    <div className="p-content">
                        <ul ref = {el => {popularRecipesList = el}}>
                          <li className={state.isActive1 ? "active" : ""}>
                            <div className="content-inner">
                              <h4 className="title">{popularRecipes[0].title}</h4>
                              <h3 className="recipe">{popularRecipes[0].recipe.substring(0, 100)} ...</h3>
                              <p className="date">{popularRecipes[0].created}</p>
                            </div>
                          </li>
                          <li className={state.isActive2 ? "active" : ""}>
                            <div className="content-inner">
                              <h4 className="title">{popularRecipes[1].title}</h4>
                              <h3 className="recipe">{popularRecipes[1].recipe.substring(0, 100)} ...</h3>
                              <p className="date">{popularRecipes[1].created}</p>
                            </div>
                          </li>
                          <li className={state.isActive3 ? "active" : ""}>
                            <div className="content-inner">
                              <h4 className="title">{popularRecipes[2].title}</h4>
                              <h3 className="recipe">{popularRecipes[2].recipe.substring(0, 100)} ...</h3>
                              <p className="date">{popularRecipes[2].created}</p>
                            </div>
                          </li>
                        </ul>
                    </div>
                  </div>

                  <div onClick={ state.clickable ? nextSlide : null} className="arrows right">
                    <span>
                      <MdKeyboardArrowRight fontSize={30}/>
                    </span>
                  </div>
              </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </section>
    )
}

export default PopularRecipes;