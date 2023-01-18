import React from 'react';

const Student = (props) => {
    return(
        <div style={{ backgroundColor: "skyblue", margin: "12px" }}>
            <h2>Roll No :- {props.id}</h2>
            <h2>Student Name :- {props.name}</h2>
            {/* <h3>Phone No :- {props.contact}</h3> */}
        </div>
    )
}

export default Student;