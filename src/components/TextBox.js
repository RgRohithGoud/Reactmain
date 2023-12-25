import { useState } from "react";
import React from 'react'

export default function TextBox(props){
    const [text, setText] = useState('Enter Text Here');
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUpclick = ()=>{
        const newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLoclick = ()=>{
        const newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleClearclick = ()=>{
        const newtext = ""; 
        setText(newtext);
    }
    return(
        <>
        <div>
            <div className="form-group">
            <h2>{props.heading}</h2>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="My-Box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-sm-3 mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
            <button className="btn btn-primary my-sm-3 mx-2" onClick={handleLoclick}>Convert to LowerCase</button>
            <button className="btn btn-primary my-sm-3 mx-2" onClick={handleClearclick}>Clear Text</button>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{text.length} characters and {text.split(" ").length} words</p>
        </div>
        </>
    );
} 