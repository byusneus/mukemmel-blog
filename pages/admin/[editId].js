import styles from "../../styles/blog-ekle.scss";
import QuillNoSSRWrapper from "../../components/Editor";
import { useEffect, useState } from "react";
import firestore from "../../common/firestore"
import Loader from 'react-loader-spinner'

const BlogEdit = ({ blog }) => {

    const [html, setHtml] = useState(false);
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setHtml(true);
        }, 3000);
    }, [])

    useEffect(() => {
        if (html) {
            var editor = document.getElementsByClassName("ql-editor").item(0);
            editor.innerHTML += blog.text;
        }
    }, [html])

    const saveContent = () => {
        firestore.collection("bloglar")
    }

    return (
        <div>
            <div className={`loader${html ? " deactive" : "" }`}>
                <Loader
                    type="Rings"
                    color="#303030"
                    height={120}
                    width={120}
                    timeout={3000}
                />
            </div>
            <div className="main-content">
                <div className="title"><input className="blog-title" placeholder="BLOG BAŞLIK" onChange={event => setTitle(event.target.value)} defaultValue={blog.title} /></div>
                <div className="blog-image">Blog Ana Resim : <input type="file" onChange={event => setImage(event.target.files[0])} /></div>
                <QuillNoSSRWrapper />
                <button id="el" className="save-button" onClick={saveContent}>GÜNCELLE</button>

            </div>
            <style jsx>{styles}</style>
        </div>
    )

}

BlogEdit.getInitialProps = async ({ req, query }) => {
    const res = await firestore.collection("bloglar").where("slug", "==", `${query.editId}`).get();
    let blog = null;
    res.forEach((doc) => {
        blog = doc.data();
    })

    return { blog: blog }
}

export default BlogEdit;