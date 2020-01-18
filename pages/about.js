import styles from "../styles/about.scss"
import profile from "../images/ogr_foto.jpg"
import { TimelineLite, Power3 } from "gsap"
import { useEffect, useRef } from "react"

const About = () => {

    let title = useRef(null);

    // useEffect(()=>{
    //     var title = document.querySelectorAll(".about-title");
    //     var subtitle = document.querySelectorAll(".about-subtitle");
    //     var text = document.querySelectorAll(".about-text");
    //     var info = document.querySelectorAll(".info");
    //     var skillsSection = document.querySelectorAll(".skills-section");
    //     var profilePic = document.querySelectorAll(".profile-pic img");
    //     var downloadBtn = document.querySelectorAll(".cv-button");

    //     var tl = new TimelineLite();
    //     tl.from(title, 1.2, {
    //         opacity:0,
    //         y: 50,
    //         ease: Power3.easeOut,
    //     }).from(subtitle, {
    //         delay: -0.8,
    //         duration: 1.2, 
    //         opacity:0,
    //         y: 50,
    //         ease: Power3.easeOut,
    //     }).from(text, {
    //         delay: -0.8,
    //         duration: 1.2, 
    //         opacity:0,
    //         y: -50,
    //         ease: Power3.easeOut,
    //     }).from(info, {
    //         delay: -0.8,
    //         duration: 1.2, 
    //         opacity:0,
    //         y: -50,
    //         ease: Power3.easeOut,
    //     }).from(profilePic, {
    //         delay: -1,
    //         duration: 1.2, 
    //         opacity:0,
    //         x: 100,
    //         ease: Power3.easeOut,
    //     }).from(downloadBtn, {
    //         delay: -0.5,
    //         duration: 1.2, 
    //         opacity:0,
    //         y: -50,
    //         ease: Power3.easeOut,
    //     }).from(skillsSection, {
    //         delay: -0.8,
    //         duration: 1.2, 
    //         opacity:0,
    //         y: 50,
    //         ease: Power3.easeOut,
    //     })
    // },[])

    return (
        <div className="about-section">
            <div className="profile">
                <div className="profile-about">
                    <h1 className="about-title">MERHABA, BEN  <span><i>YUNUS EMRE ALPAK</i></span></h1>
                    <h2 className="about-subtitle"><span>Web ve Mobil Geliştirici</span></h2>
                    <p className="about-text">Web ve Mobil dünyasında kendini geliştirmeye devam eden bir Bilgisayar Mühendisliği öğrencisiyim. Yeni teknolojileri takip etmeye çalışıp kendimi kaybetmemeye dikkat ediyorum. Farklı sektörlerde bir süre kaybolduktan sonra kendimi tekrar web ve mobile çevirdim. Aklında bir çok projesi olan, sabırsız bir yazılımcıyım. Durmak yok yola devam...</p>
                    <div className="info">
                        <div className="info-title">
                            <p><span>Age</span></p>
                            <p><span>Email</span></p>
                            <p><span>Website</span></p>
                        </div>
                        <div className="info-desc">
                            <p>25</p>
                            <p>yunusemrealpak@gmail.com</p>
                            <p>yunusemrealpak.com</p>
                        </div>

                    </div>
                </div>
                <div className="profile-pic">
                    <img src={profile} />
                    <div className="cv-button">
                        <a className="btn" href="/deneme.txt" target="_blank" download>DOWNLOAD RESUME</a>
                    </div>
                </div>
            </div>
            <div className="skills-section">
                <h2>İLGİ ALANLARIM</h2>
                <div className="line"></div>
                <div className="skills">
                    <div className="skill-container">
                        <svg className="skill-bar" viewBox="0 0 64 64">
                            <defs>
                                <clipPath id="progress__mask">
                                    <path d="M29 63.35h-.15a31.55 31.55 0 0 1-28.2-28.2 1.5 1.5 0 0 1 3-.3 28.56 28.56 0 0 0 25.5 25.51 1.5 1.5 0 0 1-.15 3zM35 63.35a1.5 1.5 0 0 1-.15-3 28.56 28.56 0 0 0 25.52-25.5 1.5 1.5 0 0 1 3 .3 31.55 31.55 0 0 1-28.2 28.19zM2.14 30.5H2a1.5 1.5 0 0 1-1.35-1.65A31.56 31.56 0 0 1 28.85.66a1.5 1.5 0 0 1 .3 3A28.56 28.56 0 0 0 3.63 29.15a1.5 1.5 0 0 1-1.49 1.35zM61.86 30.5a1.5 1.5 0 0 1-1.49-1.35A28.56 28.56 0 0 0 34.85 3.64a1.5 1.5 0 1 1 .3-3 31.56 31.56 0 0 1 28.2 28.19A1.5 1.5 0 0 1 62 30.49z" />
                                </clipPath>
                            </defs>
                            <g clip-path="url(#progress__mask)">
                                <circle className="skill__track" cx="50%" cy="50%" r="30px"></circle>
                                <circle className="skill__thumb" cx="50%" cy="50%" r="30px"></circle>
                            </g>

                        </svg>
                        <div className="skill-content">
                            <div className="skill__value"><span>%</span> <span className="percent">90</span></div>
                            <div className="skill__text">HTML & CSS</div>
                        </div>
                    </div>
                    <div className="skill-container">
                        <svg className="skill-bar" viewBox="0 0 64 64">
                            <defs>
                                <clipPath id="progress__mask">
                                    <path d="M29 63.35h-.15a31.55 31.55 0 0 1-28.2-28.2 1.5 1.5 0 0 1 3-.3 28.56 28.56 0 0 0 25.5 25.51 1.5 1.5 0 0 1-.15 3zM35 63.35a1.5 1.5 0 0 1-.15-3 28.56 28.56 0 0 0 25.52-25.5 1.5 1.5 0 0 1 3 .3 31.55 31.55 0 0 1-28.2 28.19zM2.14 30.5H2a1.5 1.5 0 0 1-1.35-1.65A31.56 31.56 0 0 1 28.85.66a1.5 1.5 0 0 1 .3 3A28.56 28.56 0 0 0 3.63 29.15a1.5 1.5 0 0 1-1.49 1.35zM61.86 30.5a1.5 1.5 0 0 1-1.49-1.35A28.56 28.56 0 0 0 34.85 3.64a1.5 1.5 0 1 1 .3-3 31.56 31.56 0 0 1 28.2 28.19A1.5 1.5 0 0 1 62 30.49z" />
                                </clipPath>
                            </defs>
                            <g clip-path="url(#progress__mask)">
                                <circle className="skill__track" cx="50%" cy="50%" r="30px"></circle>
                                <circle className="skill__thumb" cx="50%" cy="50%" r="30px"></circle>
                            </g>

                        </svg>
                        <div className="skill-content">
                            <div className="skill__value"><span>%</span> <span className="percent">75</span></div>
                            <div className="skill__text">WEB DESİGN</div>
                        </div>
                    </div>
                    <div className="skill-container">
                        <svg className="skill-bar" viewBox="0 0 64 64">
                            <defs>
                                <clipPath id="progress__mask">
                                    <path d="M29 63.35h-.15a31.55 31.55 0 0 1-28.2-28.2 1.5 1.5 0 0 1 3-.3 28.56 28.56 0 0 0 25.5 25.51 1.5 1.5 0 0 1-.15 3zM35 63.35a1.5 1.5 0 0 1-.15-3 28.56 28.56 0 0 0 25.52-25.5 1.5 1.5 0 0 1 3 .3 31.55 31.55 0 0 1-28.2 28.19zM2.14 30.5H2a1.5 1.5 0 0 1-1.35-1.65A31.56 31.56 0 0 1 28.85.66a1.5 1.5 0 0 1 .3 3A28.56 28.56 0 0 0 3.63 29.15a1.5 1.5 0 0 1-1.49 1.35zM61.86 30.5a1.5 1.5 0 0 1-1.49-1.35A28.56 28.56 0 0 0 34.85 3.64a1.5 1.5 0 1 1 .3-3 31.56 31.56 0 0 1 28.2 28.19A1.5 1.5 0 0 1 62 30.49z" />
                                </clipPath>
                            </defs>
                            <g clip-path="url(#progress__mask)">
                                <circle className="skill__track" cx="50%" cy="50%" r="30px"></circle>
                                <circle className="skill__thumb" cx="50%" cy="50%" r="30px"></circle>
                            </g>

                        </svg>
                        <div className="skill-content">
                            <div className="skill__value"><span>%</span> <span className="percent">70</span></div>
                            <div className="skill__text">REACT JS</div>
                        </div>
                    </div>
                    <div className="skill-container">
                        <svg className="skill-bar" viewBox="0 0 64 64">
                            <defs>
                                <clipPath id="progress__mask">
                                    <path d="M29 63.35h-.15a31.55 31.55 0 0 1-28.2-28.2 1.5 1.5 0 0 1 3-.3 28.56 28.56 0 0 0 25.5 25.51 1.5 1.5 0 0 1-.15 3zM35 63.35a1.5 1.5 0 0 1-.15-3 28.56 28.56 0 0 0 25.52-25.5 1.5 1.5 0 0 1 3 .3 31.55 31.55 0 0 1-28.2 28.19zM2.14 30.5H2a1.5 1.5 0 0 1-1.35-1.65A31.56 31.56 0 0 1 28.85.66a1.5 1.5 0 0 1 .3 3A28.56 28.56 0 0 0 3.63 29.15a1.5 1.5 0 0 1-1.49 1.35zM61.86 30.5a1.5 1.5 0 0 1-1.49-1.35A28.56 28.56 0 0 0 34.85 3.64a1.5 1.5 0 1 1 .3-3 31.56 31.56 0 0 1 28.2 28.19A1.5 1.5 0 0 1 62 30.49z" />
                                </clipPath>
                            </defs>
                            <g clip-path="url(#progress__mask)">
                                <circle className="skill__track" cx="50%" cy="50%" r="30px"></circle>
                                <circle className="skill__thumb" cx="50%" cy="50%" r="30px"></circle>
                            </g>

                        </svg>
                        <div className="skill-content">
                            <div className="skill__value"><span>%</span> <span className="percent">80</span></div>
                            <div className="skill__text">FLUTTER</div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default About;