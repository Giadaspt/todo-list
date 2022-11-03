import React from "react";

//HOC = HACKER ORDER COMPONENTS

function HOCList(RenderComponent, url){
  return class extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        items: []
      }
    }

    async componentDidMount(){
      const items = await fetch(url)
      .then(response => response.json())
      .then(result => result);
      console.log({items});
  
      this.setState( (prevState, props) =>{
        // questo nel caso in cui l'array fosse pieno allora viene modificato, altrimenti array vuoto come sotto
        // return {
        //   users: [...prevState.users, users]
        // }
        return {
          items
        }
      })
    }
  
    render(){
      return <RenderComponent data={this.state.items}/>
    }
  }
};

export default HOCList;