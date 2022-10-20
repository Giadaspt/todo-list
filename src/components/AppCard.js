import React from "react";

// class AppCard extends React.Component {
//   render(){
//     return(
//       <div className='card'>
//         <div className='card-header'> 
//           <h1 className="card-header-title subtitle"> { this.props.title }</h1>
//         </div>
//         <div className='card-content'>
//           <p>{ this.props.message }</p>
//         </div>
//       </div>
//     )
//   }
// }

function AppCard(props){
  return(
    <div className='card'>
      <div className='card-header'> 
        <h1 className="card-header-title subtitle"> { props.title }</h1>
      </div>
      <div className='card-content'>
        <p>{ props.message }</p>
      </div>
    </div>
  )
};

export default AppCard;



