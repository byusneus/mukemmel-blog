import Head from "next/head";
import AdminNavbar from "../navbars/AdminNavbar";

const AdminLayout = (props) => {
    return (
        <div className="admin-layout">
            <Head>
                <title>Admin</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            </Head>


            <div className="row no-margin">
                <AdminNavbar />
                <div className="col-md-9">
                    {props.children}
                </div>
            </div>

            <style jsx>{`
                .no-margin{
                    margin-right: 0px !important;
                    margin-left: 0px !important;
                }
                .admin-layout{
                    margin: 0px;
                    padding: 0px;
                }
            `}</style>
        </div>
    );
};

export default AdminLayout;