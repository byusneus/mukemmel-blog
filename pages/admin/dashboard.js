
import firebase from "../../common/firebase";
import { motion } from "framer-motion";
import styles from "../../styles/dashboard.scss"
import QuillNoSSRWrapper from "../../components/Editor";
import { useEffect, useState } from "react";
import Router from "next/router";


const Dashboard = () => {

  return (
    <div className="main-content">
      <h3>DASHBOARD</h3>
    <style jsx>{styles}</style>
    </div>
  )
}

export default Dashboard;