import React from 'react';
import './App.css';
import Timetable from './components/Timetable';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timetables: [
        {
          city: "Roma",
          offset: 2
        },
        {
          city: "Mosca",
          offset: 5
        },
        {
          city: "Los Angeles",
          offset: -10
        }
      ],
      render: true,
    }
    this.handleClick = this.handleClick.bind(this)
  };

  handleClick(){
    console.log(this);
    this.setState({
      render: false
    })
  }

  render(){
    return (
      <div className='container is-fluid'>
        <div className='section'>
          <div className='column'>
            {
              // se il valore di rendere è true allora facciamo la reinderizzarione altriment ne facciamo un'altra. Quindi il seguente  codide deve essere reindirizzato solamente se render è true
              this.state.render && this.state.timetables.map( (timetable, index) => <Timetable city={timetable.city}  offset={timetable.offset} key={index}></Timetable>)
            }
           
          </div>
        </div>
        <button className='button is-primary' onClick={(e) => this.handleClick(e)}>
          Elimina componenti
        </button>
        {/* 
        uso questo al posto di this.handleClick = this.handleClick.bind(this)
        il risulato è uguale identico
        <button onClick={(e) => this.handleClick(e)}>Elimina componenti</button> 
        */}
      </div>
    );
  }
};

export default App;
