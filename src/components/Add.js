import React from 'react'
import {Link} from 'react-router-dom';

const Add = () => {
    return (
        <div className="card add-card">
            <center>
            <Link to="/AddPhoto"><i className="img" className="fa fa-plus-circle"></i></Link>
            </center>
        </div>
    )
}

export default Add
