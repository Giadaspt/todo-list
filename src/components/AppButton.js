import React from "react";

function AppButton(props, context){
  const themeClass = context === 'light' ? 'is-light' : 'is-dark';

  return (
    <a className={`button ${themeClass}`} >
      {props.text}
    </a>
  )
};

export default AppButton;