import React, { useState } from "react";
import letterFrequencies1 from "../functions/letterFrequencies";

export default function Textform(props) {
  const handleUpClick = () => {
    //    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    //    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    //    console.log("On change");
    setText(event.target.value);
  };
  const handleClearText = () => {
    setText("");
  };

  const handleCopyText = () => {
    let textcopy = document.getElementById("floatingTextarea2");
    textcopy.select();
    navigator.clipboard.writeText(textcopy.value);
    // Alert the copied text
    alert("Copied the text");
  };

  const letterFreq = (text) => {
    let lf = letterFrequencies1(text);
    console.log(lf);
    console.log("Letter freq");
  };
  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container my-4">
        <h3>{props.heading}</h3>

        <div className="form-floating my-4">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "200px" }}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button
          className="btn btn-secondary my-3 mx-3"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-secondary my-3 mx-3"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          className="btn btn-secondary my-3 mx-3"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button className="btn btn-secondary my-3 mx-3" onClick={letterFreq}>
          lettter Freq
        </button>
      </div>
      <div className="container my-4">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          {Number((0.008 * text.split(" ").length).toFixed(1))} Minute reads
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      <div className="container">
        <h2>Letter freqeuncies </h2>
      </div>
    </>
  );
}
