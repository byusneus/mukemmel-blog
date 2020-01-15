import { useState } from "react";
import styles from "../../styles/blog-ekle.scss";
import QuillNoSSRWrapper from "../../components/Editor";
import firestore from "../../common/firestore";
import firebase from "../../common/firebase";
import Router from 'next/router';

const BlogEkle = () => {

    const [title, setTitle] = useState('');

    const saveContent = () => {
        var editor = document.getElementsByClassName("ql-editor").item(0);
        var newBlog = firestore.collection("bloglar").doc();

        var text = setImageWidth(editor.innerHTML);
        var slug = getSlugFromTitle();
        var date = getDateFormatString();

        var mainImage = firebase.storage().ref();

        var data = {
            _id: newBlog.id,
            title: title,
            text: text,
            mainPicture: "",
            slug: slug,
            date: date
        }

        newBlog.set(data).then(()=>{
            Router.push("/"+slug);
        });
    }

    const setImageWidth = (content) => {
        var res = content.replace("<img", "<img width='100%'");
        return res;
    }

    const getDateFormatString = () => {
        var newdate ="";
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

        for(var i=0;i<dizi.length;i++){
            if(i == 0){
                slug = dizi[0];
            }else{
                slug = slug + "-" + dizi[i];
            }
        }

        return slug;
    }

    return (
        <div className="main-content">
            <div className="title"><input className="blog-title" placeholder="BLOG BAŞLIK" onChange={event => setTitle(event.target.value)} /></div>
            <QuillNoSSRWrapper />
            <button className="save-button" onClick={saveContent}>KAYDET</button>
            <style jsx>{styles}</style>
        </div>
    )
}

export default BlogEkle;