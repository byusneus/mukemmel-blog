import styles from "../../styles/blog-ekle.scss";
import QuillNoSSRWrapper from "../../components/Editor";
import { useEffect, useState } from "react";
import firestore from "../../common/firestore"
import Loader from 'react-loader-spinner'
import Router from "next/router"

const BlogEdit = ({ blog }) => {

    const [html, setHtml] = useState(false);
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [image, setImage] = useState(null);
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHtml(true);
        }, 3000);
    }, [])

    useEffect(() => {
        if (html) {
            setTitle(blog.title);
            var editor = document.getElementsByClassName("ql-editor").item(0);
            editor.innerHTML += blog.text;
        }
    }, [html])

    

    const saveContent = () => {
        setBusy(true);
        if(image == null){
            saveText(blog.mainPicture);
        }else{
            fileUploadHandler();
        }
        
    }

    const fileUploadHandler = async () => {
        var storageRef = firebase.storage().ref();
        var mainImage = storageRef.child(image.name);
        var mainUrl = "";

        mainImage.put(image).then((snapshot) => {
            snapshot.ref.getDownloadURL().then((downloadUrl) => {
                mainUrl = downloadUrl;
                saveText(mainUrl);
            });
        });
    }

    const saveText = (pictureUrl) => {
        var editor = document.getElementsByClassName("ql-editor").item(0);
        var updateBlog = firestore.collection("bloglar").doc(blog._id);

        var text = setImageWidth(editor.innerHTML);
        var slug = getSlugFromTitle();
        var date = getDateFormatString();

        var data = {
            title: title,
            text: text,
            mainPicture: pictureUrl,
            slug: slug,
            updateddate: date
        }

        updateBlog.update(data).then(() => {
            setBusy(false);
            Router.push("/admin/dashboard");
        });
    }

    const setImageWidth = (content) => {
        var res = content.replace("<img", "<img width='100%'");
        return res;
    }

    const getDateFormatString = () => {
        var newdate = "";
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        newdate = day + "/" + month + "/" + year;

        return newdate;
    }

    const getSlugFromTitle = () => {
        var slug = "";
        var dizi = title.toLowerCase().split(" ");

        for (var i = 0; i < dizi.length; i++) {
            if (i == 0) {
                slug = dizi[0];
            } else {
                slug = slug + "-" + dizi[i];
            }
        }

        setSlug(slug);

        return slug;
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