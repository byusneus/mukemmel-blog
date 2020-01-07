import { useState, useRef, useEffect } from "react";
import Router from "next/router";
import firebase from "../common/firebase";
import twitter from "../images/twitter.png"
import styles from "../styles/admin.scss";
import { TweenLite, TimelineLite, Power3} from "gsap";

const Admin = () => {
    let login_button = useRef(null);
    let div1 = useRef(null);
    let div2 = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [click, setClick] = useState({clicked: false});

    const animate = () => {
        setClick({clicked: true})
        var tl = new TimelineLite();
        tl.to(login_button, .5, {
            opacity:0,
            ease: Power3.easeInOut
        })
        
    }

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                Router.push("/dashboard");
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
            <div ref={el => {div1 = el}} className={`animate-bg-1${click.clicked ? " active" : ""}`}></div>
            <div ref={el => {div2 = el}} className={`animate-bg-2${click.clicked ? " active" : ""}`}></div>
            <div ref={el => {login_button = el}} className="login-animate" onClick={animate}></div>
            <div className="login-div">
                <div className="logo"><img src={twitter}/></div>
                <div className="title">Yunus Emre Alpak</div>
                <div className="sub-title">Beta</div>
                <div className="fields">
                    <div className="username"><input type="username" className="user-input" placeholder="Username" /></div>
                    <div className="password"><input type="password" className="pass-input" placeholder="Password" /></div>
                </div>
                <button className="signin-button">GİRİŞ</button>
                <div className="link"><a>Şifremi unuttum!</a></div>
                {/* Admin Login PAge<br/>
            <input className="form-check-input" onChange={event => setEmail(event.target.value)} />
            <input className="form-check-input" onChange={event => setPassword(event.target.value)} /><br/>
            <button className="btn btn-primary" onClick={login}>Login</button> */}
                
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Admin; 