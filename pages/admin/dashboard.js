
import firebase from "../../common/firebase";
import { motion } from "framer-motion";
import styles from "../../styles/dashboard.scss"
import QuillNoSSRWrapper from "../../components/Editor";


const Dashboard = () => {

  const saveContent = () => {
    var editor = document.getElementsByClassName("ql-editor").item(0);
    console.log(editor.innerHTML);
  }

  return (
    <div className="main-content">
      <h3>BLOG EKLE</h3>
    <style jsx>{styles}</style>
    </div>
  )
}

export default Dashboard;