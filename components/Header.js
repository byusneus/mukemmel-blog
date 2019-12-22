
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from '../styles/Header.scss';
import { TweenLite, Power3} from "gsap";

const Header = () => {

    let navBar = useRef(null);
    let cizgi = useRef(null);

    useEffect(() => {
        TweenLite.from(navBar, .8, {
            opacity: 0,
            y:-50,
            skewX: -20,
            ease: Power3.easeInOut
        })
        TweenLite.from(cizgi, .5, {
            delay: .8,
            x: -5000,
            ease: Power3.easeInOut
        })
    }, []);

    return(
        <header id="header">
            <div className="container-fluid">
                <div ref={el => {navBar = el}} className="row">
                    <div className="header-inner">
                        <div className="logo">BUSEM</div>
                        <div className="navigation">
                            <nav>
                            <ul>
                                <li><Link href="/"><a>Anasayfa</a></Link></li>
                                <li><Link href="/"><a>Kategoriler</a></Link></li>
                                <li><Link href="/"><a>Yemeğin Hikayesi</a></Link></li>
                                <li><Link href="/"><a>Hakkımda</a></Link></li>
                            </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr ref={el => {cizgi = el}} className="header-hr" />
                </div>
            <style jsx>{styles}</style>
      </header>
    )
}

export default Header;