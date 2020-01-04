import { useState, useRef, useEffect } from "react"
import Head from "./Head"
import styles from "../styles/layout.scss";
import profile from "../images/ogr_foto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { TweenLite, Power3} from "gsap";

const Layout = ( props ) => {

    let header = useRef(null);
    let background = useRef(null);
    let sidebar = useRef(null);

    useEffect(() => {
        TweenLite.from(background, .5, {
            height: 0,
            ease: Power3.easeInOut
        })
        TweenLite.from(header, .8, {
            delay: .2,
            height: 0,
            ease: Power3.easeInOut
        })
        TweenLite.from(sidebar, .8, {
            delay: .6,
            opacity: 0,
            y: -50,
            ease: Power3.easeIn
        })
      }, []);

    return (
        <div className="main-content">
            <Head/>

            <header ref={(el) => {header = el}}>
                <div ref={(el) => {background = el}} className="background"></div>
                <nav ref={(el) => {sidebar = el}} className="sidebar">
                    <div className="profile">
                        <div className="profile-box">
                            <img className="profile-img" src={profile} />
                        </div>
                        <div className="profile-name">Yunus Emre ALPAK</div>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            ANASAYFA
                            <hr/>
                        </li>
                        <li className="nav-item">
                            BLOG
                            <hr/>
                        </li>
                        <li className="nav-item">
                            GALERİ
                            <hr/>
                        </li>
                        <li className="nav-item">
                            İLETİŞİM
                            <hr/>
                        </li>
                    </ul>
                    <div className="social-media">
                        <FontAwesomeIcon className="my-icon" icon={faFacebook} size="lg" color="#DBC5A4" />
                        <div className="spacer"></div>
                        <FontAwesomeIcon icon={faInstagram} size="lg" color="#DBC5A4"/>
                        <div className="spacer"></div>
                        <FontAwesomeIcon icon={faYoutube} size="lg" color="#DBC5A4"/>
                    </div>
                </nav>
            </header>

            <main>
                {props.children}
            </main>

            <style jsx>{styles}</style>
        </div>
    )
}

export default Layout;