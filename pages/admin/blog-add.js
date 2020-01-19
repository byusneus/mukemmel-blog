import { useState, useEffect } from "react";
import styles from "../../styles/blog-ekle.scss";
import QuillNoSSRWrapper from "../../components/Editor";
import firestore from "../../common/firestore";
import firebase from "../../common/firebase";
import Router from 'next/router';
import Loader from 'react-loader-spinner'
import PermissionControl from "../../components/PermissionControl";

const BlogEkle = () => {

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [image, setImage] = useState(null);
    const [busy, setBusy] = useState(false);

    const saveContent = () => {
        setBusy(true);

        fileUploadHandler();
    }

    const fileUploadHandler = async () => {
        var storageRef = firebase.storage().ref();
        var randomName = randomImageName();
        var mainImage = storageRef.child(randomName);
        var mainUrl = "";

        mainImage.put(image).then((snapshot) => {
            snapshot.ref.getDownloadURL().then((downloadUrl) => {

                mainUrl = downloadUrl;
                saveText(mainUrl);
            });

        });


    }

    const randomImageName = () => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 10; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    const saveText = async (pictureUrl) => {
        var editor = document.getElementsByClassName("ql-editor").item(0);
        let length = 0;
        try{
            var bloglar = await firestore.collection("bloglar").get();
            bloglar.forEach((doc) => {
                length++;
            })
        }catch(e){
            
        }
        
        var newBlog = firestore.collection("bloglar").doc();

        var text = setImageWidth(editor.innerHTML);
        // var slug = getSlugFromTitle();
        var date = getDateFormatString();

        var data = {
            _id: newBlog.id,
            number: length,
            title: title,
            text: text,
            mainPicture: pictureUrl,
            slug: slug,
            date: date,
            updateddate: date
        }

        console.log(data);

        newBlog.set(data).then(() => {
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
        <PermissionControl>
            <div>
                {busy ? <div className="loader">
                    <Loader
                        type="Rings"
                        color="#303030"
                        height={120}
                        width={120}
                    />
                </div>
                    : null}
                <div className="main-content">
                    <div className="title"><input className="blog-title" placeholder="BLOG BAŞLIK" onChange={event => setTitle(event.target.value)} /></div>
                    <div className="blog-info">
                        <div className="blog-info-title">
                            <p>Kalıcı bağlantı <span>:</span></p>
                            <p>Blog Ana Resim <span>:</span></p>
                        </div>
                        <div className="blog-info-desc">
                           <p> <span>{process.env.development}/<input onChange={event => setSlug(event.target.value)} /></span></p>
                           <p><input type="file" onChange={event => setImage(event.target.files[0])} /></p>
                        </div>
                    </div>
                    <QuillNoSSRWrapper />
                    <button className="save-button" onClick={saveContent}>KAYDET</button>

                </div>
            </div>
            <style jsx>{styles}</style>
        </PermissionControl>

    )
}

export default BlogEkle;