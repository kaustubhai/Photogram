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
            <input className="form-input" type="text" name="des" placeholder="Enter a Suitable Title" mandatory />
            <input className="form-input" type="text" name="url" placeholder="Enter the URL of the image" mandatory />
            <button className="form-button">Submit</button>
            </form>
            </center>
    )
}

export default Form;