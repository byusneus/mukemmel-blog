import Head from "next/head";
import Navbar from "../nav";

const Layout = (props) => {
    return(
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div>
                <Navbar/>
                { props.children }
            </div>
        </div>
    );
};

export default Layout;