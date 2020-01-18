import { useState, useRef, useEffect } from "react"
import styles from "../styles/admin_sidebar.scss";
import Link from "next/link"
import Router from "next/router"
import PermissionControl from "./PermissionControl";

const AdminSidebar = (props) => {

    let menu_button = useRef(null);

    const [state, setState] = useState({ clicked: false })

    const menuClicked = () => {
        if (state.clicked) {
            setState({ clicked: false })
        } else {
            setState({ clicked: true })
        }
    }

    return (
        <PermissionControl>
            <header className={`${state.clicked ? "active" : ""}`}>
                <div ref={el => { menu_button = el }} className={`icon${state.clicked ? " active" : ""}`} onClick={menuClicked}>
                    <div className="hamburger"></div>
                </div>
                <nav className="sidebar">
                    <Link href="/"><a className="profile-name btn">Yunus Emre ALPAK</a></Link>
                    <ul className={`nav-list${state.clicked ? " active" : ""}`}>
                        <li className="nav-item">
                            <Link href="/admin/dashboard"><a className="btn">BLOGLAR</a></Link>
                            <hr />
                        </li>
                        <li className="nav-item">
                            <Link href="/admin/blog-add"><a className="btn">BLOG EKLE</a></Link>
                            <hr />
                        </li>
                        <li className="nav-item disabled">
                            <div className="btn">PROFİL</div>
                            <hr />
                        </li>
                    </ul>
                </nav>
            </header>
            <style jsx>{styles}</style>
        </PermissionControl>



    )
}

export default AdminSidebar;