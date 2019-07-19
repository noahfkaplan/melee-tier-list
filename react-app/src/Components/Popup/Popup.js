import React from "react"

function Popup(props){
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{props.text}</h1>
          <button onClick={props.closePopup}>Close</button>
        </div>
      </div>
    );
}
export {Popup}