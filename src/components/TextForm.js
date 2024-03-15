import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase", "Sucess");
  };

  const handleloClick = () => {
    console.log("Lowercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase", "Sucess");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaked", "Sucess");
  };
  const handleonchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText("new text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#023784" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="mybox" className="form-label"></label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#023784" : "white",
              color: props.mode === "dark" ? "white" : "#023784",
            }}
            id="mybox"
            rows="10"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={speak}>
          speak
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#023784" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((Element) => {
              return Element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((Element) => {
              return Element}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
