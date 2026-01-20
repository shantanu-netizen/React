import React, { useState } from 'react'

export default function TextForm() {
    const [text, setext] = useState('Enter your text')
    const handleUpClick = () => {
        console.log("Uppercase")
        let uppText = text.toUpperCase()
        setext(uppText)
    }
    const handleLoClick = () => {
        console.log("lowercase")
        let lowText = text.toLowerCase()
        setext(lowText)
    }
    const handleClear = () => {
        console.log("clear")
        let clear =("")
        setext(clear)
    }
    const handlechange = (e) => {
        
        setext(e.target.value)
    }
    return (
        <>
            <div>
                <h1>Enter your text</h1>
                <div class="mb-3">
                    <label for="My text" className="form-label" >Example textarea</label>
                    <textarea className="form-control" id="" rows="8" value={text} onChange={handlechange}></textarea>
                </div>
                <button className="btn btn-success mx-1" onClick={handleUpClick}>convert into uppercase</button>
                <button className="btn btn-success mx-1" onClick={handleLoClick}>convert into lowercase</button>
                <button className="btn btn-info mx-1" onClick={handleClear}>clear</button>
                <div>
                    <h1>Your text summary</h1>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length } Minutes read</p>
                </div >
            </div >
        </>

    )
}
