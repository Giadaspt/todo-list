import React from "react";

function AddTimetable(props){

  return(
      <form onSubmit={props.handleSubmit}>
        <div className="field">
          <label className="label"> Città </label>
          <div className="control">
            <input 
            className="input" 
            placeholder="es. Roma" 
            type="text" 
            value={props.city} 
            onChange={(e) => props.handleChange(e, 'city')}/> 
          </div>
        </div>
        <div className="field">
          <label className="label"> Offset </label>
          <div className="control">
            <input 
            className="input" 
            placeholder="es. 3"
            type="number" 
            min="-10"
            max="5"
            step="1"
            value={props.offset} 
            onChange={(e) => props.handleChange(e, 'offset')}/> 
          </div>
        </div>
        <button className="button is-primary" type="submit"> Submit </button>
      </form>
  )
};

export default AddTimetable;