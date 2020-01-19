
import firebase from "../../common/firebase";
import { motion } from "framer-motion";
import styles from "../../styles/dashboard.scss"
import firestore from "../../common/firestore";
import Link from "next/link"
import Popup from "reactjs-popup"
import { useState, useEffect } from "react";
import PermissionControl from "../../components/PermissionControl";
import Head from "../../components/Head";

const Dashboard = ({ blogList }) => {

  const [busy, setBusy] = useState(false);

  const removeElement = (index) => {
    var name = "tr-" + index.toString();
    var el = document.getElementById(name);
    el.remove();
  }

  return (
    <PermissionControl>
      <Head title="Dashboard - Admin Panel" />
      <div className="main-content">
        <table className="content-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Blog</th>
              <th>Oluşturulma Tarihi</th>
              <th>Güncellenme Tarihi</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {blogList.map((blog, index) => (
              <tr key={index} id={`tr-${index}`}>
                <td>{index + 1}</td>
                <td>{blog.title}</td>
                <td>{blog.date}</td>
                <td>{blog.updateddate}</td>
                <td>
                  <Link href="/admin/[editId]" as={`/admin/${blog.slug}`}><a className="btn green">Güncelle</a></Link>
                  &nbsp;
                <Popup trigger={<a className="btn red"> Sil </a>} modal>
                    {close => (
                      <div className="modal">
                        <a className="close" onClick={close}>
                          &times;
                      </a>
                        <div className="header"> {blog.title} </div>
                        <div className="content">
                          {" "}
                          Silme işlemini gerçekleştirdikten sonra bu yazınıza tekrar ulaşamayacaksınız. Silmek istediğinizden emin misin?
                      </div>
                        <div className="actions">

                          <button
                            disabled={busy ? true : false}
                            className="btn red"
                            onClick={async () => {
                              setBusy(true);
                              firestore.collection("bloglar").doc(blog._id).delete().then(() => {
                                removeElement(index);
                                setBusy(false);
                                close();
                              })

                            }}
                          >
                            {busy
                              ? "Siliniyor..."
                              : "SİL"}
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{styles}</style>
    </PermissionControl>
  )
}

Dashboard.getInitialProps = async ({ req, query }) => {
  const querysnapshot = await firestore.collection("bloglar").orderBy("number", "desc").get();
  var list = [];
  querysnapshot.forEach(doc => {
    list.push(doc.data());
  });

  return {
    blogList: list
  }
};

export default Dashboard;