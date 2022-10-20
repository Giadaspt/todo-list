import React from 'react';
import './App.css';
import AppCard from './components/AppCard';

function App() {
  // const h1 = React.createElement(
  //   "h1",
  //   {},
  //   "Ciao React!"
  // )
  // const p = React.createElement(
  //   "p",
  //   {},
  //   "Ciao papà div"
  // )
  // const div = React.createElement(
  //   "div",
  //   {},
  //   [h1, p]
  // );
  //   return div;

  const users =[
    {
      title: "titolo1",
      message: 'messaggio1'
    },
    {
      title: "titolo2",
      message: 'messaggio2'
    },
    {
      title: "titolo1",
      message: 'messaggio3'
    },

  ]

  return (
    <div className='section'>
      <div className='columns'>
        <div className='column is-2'>
          {
            users.map(user => 
            <AppCard title={user.title} message={user.message}>
            </AppCard>)
          }
        </div>
        {/* <div className='column is-2'>
          <AppCard></AppCard>
        </div>
        <div className='column is-2'>
          <AppCard></AppCard>
        </div> */}
        
      </div>
    </div>
  );
};

export default App;
