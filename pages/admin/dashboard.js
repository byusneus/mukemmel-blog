
import firebase from "../../common/firebase";
import { motion } from "framer-motion";
import styles from "../../styles/dashboard.scss"
import firestore from "../../common/firestore";
import Link from "next/link"

const Dashboard = ({ blogList }) => {

  return (
    <div className="main-content">
      <table className="content-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Blog</th>
            <th>Oluşturulma Tarihi</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {blogList.map((blog, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{blog.title}</td>
              <td>{blog.date}</td>
              <td>
                <Link href="/admin/[editId]" as={`/admin/${blog.slug}`}><a className="btn green">Güncelle</a></Link>
                &nbsp;
                <Link href="/admin/[editId]" as={`/admin/${blog.slug}`}><a className="btn red">Sil</a></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{styles}</style>
    </div>
  )
}

Dashboard.getInitialProps = async ({ req, query }) => {
  const querysnapshot = await firestore.collection("bloglar").get();
  var list = [];
  querysnapshot.forEach(doc => {
    list.push(doc.data());
  });

  return {
    blogList: list
  }
};

export default Dashboard;