import React from "react";

//HOC = HACKER ORDER COMPONENTS

function HOCList(RenderComponent, url){
  return class extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        items: [],

      }
    }

    async componentDidMount(){
      const items = await fetch(url)
      .then(response => response.json())
      .then(result => result)

      this.setState(() => {
        return{
          items
        }
      })
    }

    render(){
      return( 
        <RenderComponent data={this.state.items}/>
      )
    }
  }
}

export default HOCList;