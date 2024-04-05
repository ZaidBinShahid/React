import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text)
    let newText = text.toUpperCase()
    setText(newText)
}

const handleLowerClick = () => {
    // console.log("Uppercase was clicked " + text)
    let newText = text.toLowerCase()
    setText(newText)
}

const handleClearClick = () => {
    // console.log("Uppercase was clicked " + text)
    let newText = '';
    setText(newText)
}

// copy text
const handleCopyText = () => {
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
}
// Handle Extra Spaces
const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
}

const handleOnChange = (event) => {
    setText(event.target.value);
}
    const [text, setText] = useState('');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-1' onClick={handleCopyText}>Copy Text</button>
            <button className='btn btn-primary' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
