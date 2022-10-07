import React from "react";

class Reloj extends React.Component {
	constructor(){
  	super();
    this.state = {
    	currentTime: new Date()
    };
  }
  render(){
    setTimeout(() => this.setState({
      currentTime:new Date()
    }),1000);	
    
    const componentStyles = {
    	color: this.props.textColor
    }
    
    return <div style={componentStyles}>{this.state.currentTime.toLocaleTimeString()}</div>;
  }
};

// const Reloj = () =>{
// // 	constructor(){
// //   	super();
// //     this.state = {
// //     	currentTime: new Date()
// //     };
// //   }
// //   render(){
//     setTimeout(() => this.setState({
//       currentTime:new Date()
//     }),1000);	
    
//     // const componentStyles = {
//     // 	color: this.props.textColor
//     // }
    
//     return setTimeout
//   }

  export default Reloj; 