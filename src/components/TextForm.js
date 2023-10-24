import React, { useState } from "react";

export default function TextForm(props) {
  const onClickUpBtn = () => {
    if (text === "" || text === " ") {
      props.showAlert("Write Some Text in Box", "warning");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase", "success");
    }
  };
  const onClickLoBtn = () => {
    if (text === "" || text === " ") {
      props.showAlert("Write Some Text in Box", "warning");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase", "success");
    }
  };
  const ClearButton = () => {
    if (text===("") || text===(" ")){

      props.showAlert("Write Some Text in Box", "warning");
    }
    else{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
    }
  };
  const ONChange = (event) => {
    setText(event.target.value);
  };
  const CopyButton = () => {
    if (text===("") || text===(" ")){

      props.showAlert("Write Some Text in Box", "warning");
    }
    else{
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
    }
  };
  const removeSpace = () => {
    if (text===("") || text===(" ")){

      props.showAlert("Write Some Text in Box", "warning");
    }
    else{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
    }
  };
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div
          className="container mb-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={ONChange}
            id="text"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={onClickUpBtn}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={onClickLoBtn}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={ClearButton}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={CopyButton}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={removeSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
          {/* {text.split(" ").length} words and {text.length} characters */}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Text Above In Box to Preview"}</p>
      </div>
    </> 
  );
}
