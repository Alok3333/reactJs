import React from 'react';

function PageNotFound() {
    return(
        <div style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{color: 'red'}}>OOPS!</h1>
            <p>Sorry, Unexpected error has occurred.</p>
            <span style={{color: '#b2b2b2'}}>Oh dang!</span>
        </div>
    )
}

export default PageNotFound;