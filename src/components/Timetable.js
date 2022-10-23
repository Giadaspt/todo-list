import React from "react";

class Timetable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: new Date(),
      offset: props.offset
    };

    this.timer = setInterval(() => {
      this.tick(this.props.offset)
    }, 1000);
  };

  tick(offset){
    const d = new Date(); 
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    console.log(utc);
    const dateNew = new Date( utc + (3600000 * offset));
    console.log(dateNew);

    this.setState({
      data: dateNew
    });

  }

  render(){
    return (
      <div className='card'>
      <div className='card-header'> 
        <h1 className="card-header-title subtitle"> { this.props.city }</h1>
      </div>
      <div className='card-content'>
        <p>L'orario di { this.props.city } ({this.props.offset}) è {this.state.data.toLocaleTimeString()}</p>
      </div>
    </div>
    )
  }
}

export default Timetable;