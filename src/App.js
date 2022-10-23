import React from 'react';
import './App.css';
import Timetable from './components/Timetable';

function App() {
  const timetables = [
    {
      city: "Roma",
      offset: 1
    },
    {
      city: "Mosca",
      offset: 3
    },
    {
      city: "Los Angeles",
      offset: -8
    }
  ];

  return (
    <div className='container is-fluid'>
      <div className='section'>
        <div className='column'>
          {
            timetables.map( (timetable, index) => <Timetable city={timetable.city}  offset={timetable.offset} key={index}></Timetable>)
          }
         
        </div>
      </div>
    </div>
  );
};

export default App;
