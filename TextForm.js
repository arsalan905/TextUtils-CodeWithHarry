//import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'



export default function TextForm(props) {
   
    const handleExtraSpaces = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }

    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    
    const handleloClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleClearClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newtext = '';
        setText(newtext);
    }

    const handleOnChanged = (event)=>{
           // console.log("On Change");
            setText(event.target.value);
        }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        }

        const [text,setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"  
             value={text} onChange={handleOnChanged} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
             id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
         <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3'  style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>  
           <p>{text.split(" ").length} Words number of characters {text.length}</p> 
            <p>{0.008 * text.split(" ").length} Minute to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>

    </>
  )
}


