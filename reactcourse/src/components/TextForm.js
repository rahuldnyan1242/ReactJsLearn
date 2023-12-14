import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, SetText] = useState("");

    const placeholdertext = "Enter your text in aboev text area to preview";

    const commonALert = (value) => {
        if(text === ''){
            props.showAlert("Please enter your text !!!", "warning")
        }else {
            props.showAlert(value, "success")
        }
    }

    function handleOnchange(event){
        console.log("On change")
        SetText(event.target.value);
    }
    const handleUpperCase = () => {
        SetText(text.toUpperCase())
        commonALert("Converted to UPPERCASE");
    }
    const handleLowerCase = () => {
        SetText(text.toLowerCase())
        commonALert("Converted to LOWERCASE");
    }

    const handleCopyTest = () => {
        navigator.clipboard.writeText(text);
        commonALert("Text Copied");
    }
    const handleExtraSpace = () => {
        const extraSpace = text.split(/[ ]+/);
        SetText(extraSpace.join(' '));
        commonALert("Extra spaces are removed");
    }
    const handleClearTextArea = () => {
        SetText('');
        // props.showAlert()
    }

    
  return (
    <>
    <div className={`container bg-${props.mode}`} data-bs-theme={`${props.mode}`}>
        <div className={`container-fluid mb-3 my-3 text-${props.mode === 'light'? 'dark':'light' }`}>
            <label htmlFor="exampleFormControlTextarea1"  className="form-label">{props.heading}</label>
            <textarea className="form-control  mb-3" onChange={handleOnchange} id="exampleFormControlTextarea1" value={text} rows="5"></textarea>
            <button className="btn btn-sm btn-primary mx-1" onClick={handleUpperCase}>Change to UPPERCASE</button>
            <button className="btn btn-sm btn-primary mx-1" onClick={handleLowerCase}>Change to LOWERCASE</button>
            <button className="btn btn-sm btn-primary mx-1" onClick={handleCopyTest}>Copy Text</button>
            <button className="btn btn-sm btn-primary mx-1" onClick={handleExtraSpace}>Reomve Extra Space</button>
            <button className="btn btn-sm btn-primary mx-1" onClick={handleClearTextArea}>Clear</button>
            {/* <button className="btn btn-primary mx-3" onClick={countWords}>Count Words</button>
            <button className="btn btn-primary" onClick={() => SetText(text.to())}>Change to CAMELCASE</button> */}
        </div>
        <hr />
        <div className={`container-fluid my-3 text-${props.mode === 'light'? 'dark':'light' }`}>
            <h2>Your Text Summary</h2>
            <p>Your text has {text.trim()==='' ?0:text.match(/\S+/g).length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(' ').length} read time.</p>
            <br />
            <h2>Preview</h2>
            <p>{text.length>0?text:placeholdertext}</p>
        </div>
    </div>
    </>
  )
}