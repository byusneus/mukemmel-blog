import { useState, useRef, useEffect } from "react";
import Router from "next/router";
import firebase from "../../common/firebase";
import power from "../../images/power.png"
import ogr_foto from "../../images/ogr_foto.jpg"
import styles from "../../styles/login.scss";
import { TweenLite, TimelineLite, Power3} from "gsap";

const Admin = () => {
    let login_button = useRef(null);
    let login_div = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [click, setClick] = useState({clicked: false});

    const animate = () => {
        setClick({clicked: true})
        var tl = new TimelineLite();
        tl.to(login_button, .3, {
            opacity:0,
            ease: Power3.easeInOut
        })
        .from(login_div, 1, {
            scale: 0.4,
            ease: Power3.easeOut
        })
        
    }

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                localStorage.setItem("login", email);
                Router.push("/admin/dashboard");
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
    }

    return (
        <div className="admin-container">
            <div className={`animate-bg-1${click.clicked ? " active" : ""}`}></div>
            <div className={`animate-bg-2${click.clicked ? " active" : ""}`}></div>
            <div ref={el => {login_button = el}} className={`login-animate${click.clicked ? " disappear" : ""}`} onClick={animate}><img src={power}/></div>
            <div ref={el =>{ login_div = el}} className="login-div">
                <div className="logo"><img src={ogr_foto}/></div>
                <div className="title">Yunus Emre Alpak</div>
                <div className="sub-title">Beta</div>
                <div className="fields">
                    <div className="username"><input type="username" className="user-input" placeholder="Username" onChange={event => setEmail(event.target.value)}/></div>
                    <div className="password"><input type="password" className="pass-input" placeholder="Password" onChange={event => setPassword(event.target.value)}/></div>
                </div>
                <button className="signin-button" onClick={login}>GİRİŞ</button>
                {/* <div className="link"><a>Şifremi unuttum!</a></div> */}
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Admin; 