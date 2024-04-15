import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
}

const handleLowerClick = () => {
    // console.log("Uppercase was clicked " + text)
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase!", "success");
}

const handleClearClick = () => {
    // console.log("Uppercase was clicked " + text)
    let newText = '';
    setText(newText);
    props.showAlert("Clear to Clipboard!", "success");
}

// copy text
const handleCopyText = () => {
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copy", "success");
}
// Handle Extra Spaces
const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success");
}

const handleOnChange = (event) => {
    setText(event.target.value);
}
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
                color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1  my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleCopyText}>Copy Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
        </>
    )
}
