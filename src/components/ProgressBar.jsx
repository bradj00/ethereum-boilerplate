import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed, preText } = props;
  
    const containerStyles = {
      height: 20,
      width: '90%',
      backgroundColor: "#e0e0de",
      borderRadius: 80,
      margin: 10
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      // backgroundColor: bgcolor,
      background: 'linear-gradient(to right,#0060FF, #F8FF00)',
      borderRadius: 80,
      textAlign: 'center'
    }
  
    const labelStyles = {
      padding: 70,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  
    return (
      
      <div style={containerStyles}>
        <div style={fillerStyles}>
          
          <span style={labelStyles}>
             <span >{preText}</span>
          </span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;