import { useState, useRef, useEffect } from "react"
import Head from "./Head"
import styles from "../styles/layout.scss";
import profile from "../images/ogr_foto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { TweenLite, TimelineLite, Power3} from "gsap";

const Layout = ( props ) => {

    let bg = useRef(null);
    let bg_addition = useRef(null);
    let sidebar = useRef(null);
    let profileImage = useRef(null);
    let profileName = useRef(null);
    let navList = useRef(null);

    const [state, setState] = useState({clicked: false});

    useEffect(() => {
        var tl = new TimelineLite();
        tl.from(bg_addition, .5, {
            height: 0,
            ease: Power3.easeInOut
        })
        .from(bg, 2, {
            height: 0,
            ease: Power3.easeInOut
        }, "-=1")
        .from(profileImage, 1, {
            opacity: 0,
            y: -40,
            ease: Power3.easeInOut
        })
        .from(profileName, 1, {
            opacity: 0,
            y: 40,
            ease: Power3.easeInOut
        }, "-=1")
        .staggerFrom(navList.children, 1, {
            opacity: 0,
            y: -50,
            ease: Power3.easeInOut
        }, .2, "-=0.5")
      }, []);

    const menuClicked = () => {
        if (state.clicked) {
            setState({clicked: false})
        }else{
            setState({clicked: true})
        }
    }

    return (
        <div className="main-content">
            <Head title="Home"/>

            <header>
                <div className={`icon${state.clicked ? " active": ""}`} onClick={menuClicked}>
                    <div className="hamburger"></div>
                </div>
                <div ref={(el) => {bg_addition = el}} className="bg-addition"></div>
                <div ref={(el) => {bg = el}} className={`bg${state.clicked ? " active": ""}`}></div>
                <nav ref={(el) => {sidebar = el}} className="sidebar">
                    <div className="profile">
                        <div ref={(el) => {profileImage = el}} className="profile-box">
                            <img className="profile-img" src={profile} />
                        </div>
                        <div ref={(el) => {profileName = el}} className="profile-name">Yunus Emre ALPAK</div>
                    </div>
                    <ul ref={(el) => {navList = el}} className={`nav-list${state.clicked ? " active": ""}`}>
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
                    <div className={`social-media${state.clicked ? " active": ""}`}>
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