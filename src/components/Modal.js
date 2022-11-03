import React from "react";
import ReactDOM from "react-dom";

function Modal(props){

  /* 
  si può fare così col ternario o altrimenti come sotto direttamente col if intero,
  usando però l'if interno bisogna togliere il return sotto perchè è gia rdichiarato direttamente ne0ll'if 
  */

  // const toRet = props.show ? 
  // <div class="modal is-active">
  //   <div className="modal-background"></div>
  //   <div class="modal-content ">
  //     <div className="box">
  //       <h1 className="title is-white">Ciao</h1>
  //     </div>
  //   </div>
  //   <button class="modal-close is-large" aria-label="close" onClick={props.toggleModal}></button>
  // </div> :
  // null;

  if(props.show){
    return ReactDOM.createPortal(
      <div class="modal is-active">
        <div className="modal-background"></div>
        <div class="modal-content ">
          <div className="box">
            <h1 className="title is-white">Ciao</h1>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" onClick={props.toggleModal}></button>
      </div>,
      document.getElementById('modal')
    )

  } else {
    return null;
  }

  // return ( 
  //   <>
  //     { 
  //      ReactDOM.createPortal(
  //       toRet,
  //       document.getElementById('modal')
  //      )
  //     }
  //   </>
  // )
};

export default Modal;