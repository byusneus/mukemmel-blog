import styles from "../../styles/blog-ekle.scss";
import QuillNoSSRWrapper from "../../components/Editor";
import { useEffect } from "react";
import firestore from "../../common/firestore";

const BlogEdit = ({ blog }) => {

    let editor;

    useEffect(() => {
        editor = document.getElementsByClassName("ql-editor").item(0);
        editor.innerHTML = blog;
    },[]);

    const saveContent = () => {
        firestore.collection("bloglar")
    }

    return (
        <div className="main-content">
            <h3>BLOG EKLE</h3>
            <QuillNoSSRWrapper />
            <button className="save-button" onClick={saveContent}>KAYDET</button>
            <style jsx>{styles}</style>
        </div>
    )
}

export default BlogEdit;