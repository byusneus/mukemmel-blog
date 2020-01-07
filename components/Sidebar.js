import { useState, useRef, useEffect } from "react"
import styles from "../styles/layout.scss";
import profile from "../images/ogr_foto.jpg";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import linkedin from "../images/linkedin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { TweenLite, TimelineLite, Power3 } from "gsap";

const Sidebar = (props) => {

    let bg = useRef(null);
    let bg_addition = useRef(null);
    let menu_button = useRef(null);
    let profileImage = useRef(null);
    let profileName = useRef(null);
    let navList = useRef(null);
    let line = useRef(null);
    let socialList = useRef(null);

    const [state, setState] = useState({ clicked: false });

    useEffect(() => {
        var tl = new TimelineLite();

        tl.from(bg_addition, .5, {
            height: 0,
            ease: Power3.easeOut
        })
        .from(bg, 1, {
            height: 0,
            ease: Power3.easeIn
        })
        .from(profileImage, 1, {
            opacity: 0,
            y: -40,
            ease: Power3.easeInOut
        })
        .from(profileName, 1, {
            opacity: 0,
            y: 40,
            ease: Power3.easeInOut
        }, "-=.5")
        .from(menu_button, 1, {
            opacity: 0,
            y: -40,
            ease: Power3.easeInOut
        }, "-=.5")
        .staggerFrom(navList.children, 1, {
            opacity: 0,
            y: -50,
            ease: Power3.easeInOut
        }, .1, "-=1")
        .from(line, .5, {
            opacity: 0,
            width: 0,
            ease: Power3.easeOut
        })
        .staggerFrom(socialList.children, 1, {
            opacity: 0,
            y: -20,
            ease: Power3.easeInOut
        }, .1)

    }, []);

    const menuClicked = () => {
        if (state.clicked) {
            setState({ clicked: false })
        } else {
            setState({ clicked: true })
        }
    }

    return (
        <div className="main-content">
            <header className={`${state.clicked ? "active" : ""}`}>
                <div ref={el => { menu_button = el }} className={`icon${state.clicked ? " active" : ""}`} onClick={menuClicked}>
                    <div className="hamburger"></div>
                </div>
                <div ref={(el) => { bg_addition = el }} className="bg-addition"></div>
                <div ref={(el) => { bg = el }} className={`bg${state.clicked ? " active" : ""}`}></div>
                <nav className="sidebar">
                    <div className="profile">
                        <div ref={(el) => { profileImage = el }} className="profile-box">
                            <img className="profile-img" src={profile} />
                        </div>
                    </div>
                    <div ref={(el) => { profileName = el }} className="profile-name">Yunus Emre ALPAK</div>
                    <ul ref={(el) => { navList = el }} className={`nav-list${state.clicked ? " active" : ""}`}>
                        <li className="nav-item">
                            ANASAYFA
                            <hr />
                        </li>
                        <li className="nav-item">
                            BLOG
                            <hr />
                        </li>
                        <li className="nav-item">
                            GALERİ
                            <hr />
                        </li>
                        <li className="nav-item">
                            İLETİŞİM
                            <hr />
                        </li>
                    </ul>
                    <div className={`social-media${state.clicked ? " active" : ""}`}>
                        <hr ref={(el) => { line = el }} className="line" />
                        <div ref={(el) => { socialList = el }} className="social-media-items">
                            <img src={facebook} />
                            <img src={twitter} />
                            <img src={instagram} />
                            <img src={linkedin} />
                            <img src={youtube} />
                        </div>
                    </div>
                </nav>

            </header>

            <style jsx>{styles}</style>
        </div>
    )
}

export default Sidebar;