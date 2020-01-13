
import firebase from "../common/firebase";
import { motion } from "framer-motion";
import styles from "../styles/dashboard.scss"
import QuillNoSSRWrapper from "../components/Editor";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const Dashboard = () => {

  const saveContent = () => {
    var editor = document.getElementsByClassName("ql-editor").item(0);
    console.log(editor.innerHTML);
  }

  return (
    <div className="main-content">
      Admin
      <QuillNoSSRWrapper />
      <button onClick={saveContent}>Save</button>
    <style jsx>{styles}</style>
    </div>
  )
}

export default Dashboard;