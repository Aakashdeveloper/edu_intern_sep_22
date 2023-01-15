import React from 'react';
import {Outlet} from 'react-router-dom';

const Main = () => {
    return(
        <>
            <div className="conatiner">
                <Outlet/>
            </div>
        </>
    )
}

export default Main;