import { useState, useRef, useEffect } from "react"
import styles from "../styles/admin_sidebar.scss";
import profile from "../images/ogr_foto.jpg";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import linkedin from "../images/linkedin.png";
import { TweenLite, TimelineLite, Power3 } from "gsap";

const AdminSidebar = (props) => {

    let menu_button = useRef(null);

    const [state, setState] = useState({clicked: false})

    useEffect(() => {
        

    }, []);

    const menuClicked = () => {
        if (state.clicked) {
            setState({ clicked: false })
        } else {
            setState({ clicked: true })
        }
    }

    return (
            <header className={`${state.clicked ? "active" : ""}`}>
                <div ref={el => { menu_button = el }} className={`icon${state.clicked ? " active" : ""}`} onClick={menuClicked}>
                    <div className="hamburger"></div>
                </div>
                <nav className="sidebar">
                    <div className="profile-name">Yunus Emre ALPAK</div>
                    <ul className={`nav-list${state.clicked ? " active" : ""}`}>
                        <li className="nav-item">
                            ANASAYFA
                            <hr />
                        </li>
                        <li className="nav-item">
                            BLOGLAR
                            <hr />
                        </li>
                        <li className="nav-item">
                            BLOG EKLE
                            <hr />
                        </li>
                        <li className="nav-item">
                            İLETİŞİM
                            <hr />
                        </li>
                    </ul>
                </nav>
                <style jsx>{styles}</style>
            </header>

            
    )
}

export default AdminSidebar;