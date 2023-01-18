import React from "react";
import { useParams } from "react-router-dom";

function UserParams() {
    const params = useParams();
    const {name} = params;
    // console.log(name);
    return(
        <div>
            <h2>This is {name} Page</h2>
        </div>
    )
}

export default UserParams;