import React from 'react'

export const Form = () => {
    return (
            <center>
            <form>
            <input className="form-input" type="text" placeholder="Enter a Suitable Title" />
            <input className="form-input" type="text" placeholder="Enter the URL of the image" />
            <button className="form-button">Submit</button>
            </form>
            </center>
    )
}

export default Form;