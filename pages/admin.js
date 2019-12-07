import firebase from "../common/firebase";

class Admin extends React.Component  {
    login = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then( res => {
            console.log("res.credential", res.credential);
            console.log("res.user",res.user);
            })
            .catch( error => {
                console.log("Login failed");
            });
    }

    render(){
        return(
            <div className="container">
                Admin Login PAge
                <button className="btn btn-primary" onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Admin;