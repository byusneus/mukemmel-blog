import { useState } from "react";
import Router from "next/router";
import firebase from "../common/firebase";

const Admin = () =>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                Router.push("/dashboard");
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
    }

    return(
        <div className="container">
            Admin Login PAge<br/>
            <input className="form-check-input" onChange={event => setEmail(event.target.value)} />
            <input className="form-check-input" onChange={event => setPassword(event.target.value)} /><br/>
            <button className="btn btn-primary" onClick={login}>Login</button>
        </div>
    )
}

export default Admin; 