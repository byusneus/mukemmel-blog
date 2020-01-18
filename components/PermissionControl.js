import { useState, useEffect } from "react"
import Router from "next/router";

const PermissionControl = props => {

    const [permission, setPermission] = useState(false);

    useEffect(() => {
        var item = localStorage.getItem("login");
        if (item == null) {
            setPermission(false);
            Router.push("/admin/login");
        } else {
            setPermission(true);
        }
    }, [])

    return(
        <div>
            {permission ? props.children : null}
        </div>
    )
}

export default PermissionControl;