import React from 'react';
import './App.css';
import Timetable from './components/Timetable';
import AddTimetable from './components/AddTimetable';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

const ThemeContext = React.createContext('dark');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      theme: 'dark',
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

      newTimetable: {
        city: '',
        offset: 0
      }, 
      showModal: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
    this.toggleModal =  this.toggleModal.bind(this);
  };

  handleChange(e, prop){
    console.log('event', e.target.value);
    const timeTable = {...this.state.newTimetable};
    console.log(timeTable, 'timetable');
    timeTable[prop] = e.target.value;
    this.setState ({
      newTimetable: timeTable,
    });
  };
  // handleChangeOffset(e){
  //   console.log('event', e.target.value);
  //   const timeTable = {...this.state.newTimetable};
  //   console.log(timeTable, 'timetable');
  //   timeTable.offset = e.target.value;
  //   this.setState ({
  //     newTimetable: timeTable,
  //   });
  // };
  handleSubmit(event){
    // aggiornare timetables
    event.preventDefault();
    console.log('handleSubmit');
    this.setState((state, props) => {
      return {
        timetables: [...state.timetables, state.newTimetable]
      }
    })
  };

  toggleModal(){
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render(){
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Navbar />
          <button className='button is-warning ml-4' onClick={this.toggleModal}> 
            Apri modale 
          </button>
          <Modal  toggleModal={this.toggleModal} show={ this.state.showModal}/>
          <div className='container is-fluid'>
            <div className='section'>
              <div className='columns is-multiline'>
                {
                  this.state.timetables.map( (timetable, index) => 
                  <div className='column is-4'>
                    <Timetable 
                    city={timetable.city}  
                    offset={timetable.offset} 
                    key={index} 
                    />
                  </div>
                  )
                }
              
              </div>
              <AddTimetable 
              city={this.state.newTimetable.city}
              offeset={this.state.newTimetable.cityoffeset}
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit} 
              />
            </div>
          </div>
        </ThemeContext.Provider>
      </div>
    );
  }
};

export default App;
