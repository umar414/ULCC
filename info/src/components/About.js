// import { useState } from "react";
import React from "react";
export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: "red",
  //   backgroundColor: "white",
  //   borderRadius: "0.5rem",
  // })
   let myStyle={
    colors:props.mode==='dark'?'white':'grey',
    background:props.mode==='dark'?'grey':'white',
    border:'2px solid cyan',
   }
  
  // const handleCopy=()=>{
  //   Text.select()
  //   navigator.clipboard.writeText(setMyStyle.value)
  // }
  return (
    <div
      className="container"
      style={{ colors: props.mode === "dark" ? "white" : "grey" }}
    >
      <h1>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>This is the first item's accordion body.</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is shown by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>This is the second item's accordion body.</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is hidden by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>This is the third item's accordion body.</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is hidden by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element.
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        {/* <button
          type="button"
          className="btn btn-success my-4"
          // onClick={toggleStyle} 
          >
          Dark mode
        </button> */}
      </div>
    </div>
  );
}
