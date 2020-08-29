import React from 'react';
import { useHistory } from "react-router-dom";

const Form = ({toAppend}, Id) => {
    let history = useHistory()

    const formSubmitted = (e) => {
        e.preventDefault();
        const url = e.target.elements.url.value;
        const desc = e.target.elements.des.value;
        let ar = {
            id: Id,
            title: desc,
            url: url
        };
        toAppend(ar, ++Id);
        history.push("/");
    }

    return (
            <center>
            <form onSubmit={formSubmitted}>
            <input className="form-input" type="text" name="des" placeholder="Enter a Suitable Title" autocomplete="off" mandatory />
            <input className="form-input" type="text" name="url" placeholder="Enter the URL of the image" autocomplete="off" mandatory />
            <button className="form-button">Submit</button>
            </form>
            <div class="info1 container-cards">
                <p>Please do care that the URL you enter is of the image and not of the page. This program cannot extract images form a webpage so do take care.</p>
                <i class="info-icon fa fa-info-circle"></i>
            </div>
            <div class="info2 container-cards">
                <p>The image you upload will be visible to every user across the globe so remember to pay attention of what image and description you post</p>
                <i class="info-icon fa fa-info-circle"></i>
            </div>
            <div class="info3 container-cards">
                <p>Delete the images very carefully because you will delete them for every user across the globe and you can only add them back with their URLs</p>
                <i class="info-icon fa fa-info-circle"></i>
            </div>
            </center>
    )
}

export default Form;