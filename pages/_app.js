import React from "react";
import App from "next/app";
import Head from "../components/Head"
import Sidebar from "../components/Sidebar";
import AdminSidebar from "../components/AdminSidebar";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/app.scss"

class MyApp extends App {
    render() {
        const { Component, pageProps, router } = this.props;
        const spring = {
            type: "spring",
            damping: 100,
            stiffness: 600,
            when: "afterChildren"
          };
        // <Component/> returns the component it self
        // pageProps returns the props you use to in that component. It can be any data
        // router.route returns the route your component lives on. So in our case it will be '/' or '/products/[id]'
        // exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered
        return (
            <div>
                <Head title="Home"/>
                <div className="full-bg"></div>
                {router.route != "/admin/login" && router.route != "/dashboard" ? <Sidebar /> : null}
                {router.route === "/dashboard" ? <AdminSidebar /> : null}
                <main>
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            transition={spring}
                            key={router.pathname}
                            initial={{opacity: 0 }}
                            animate={{opacity: 1 }}
                            exit={{opacity: 0 }}
                            id="page-transition-container"
                        >
                            <Component {...pageProps} key={router.route} />
                        </motion.div>
                    </AnimatePresence>
                </main>
                <style jsx>{styles}</style>
            </div>
        );
    }
}

export default MyApp;