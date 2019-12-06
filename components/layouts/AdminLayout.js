import Head from "next/head";
import Navbar from "../nav";

const AdminLayout = (props) => {
    return(
        <div>
            <Head>
                <title>Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div>
                <Navbar/>
                { props.children }
            </div>
        </div>
    );
};

export default AdminLayout;