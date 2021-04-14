import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Buttons from '../Button/Button';

const Alerts = (props) => {
  let options =null;
  if(props.Button=== "withUndo"){
    options = (<Buttons label="UNDO" size="large"/>)
  }
  return(
    <Alert 
    onClose={()=>{}}
      action={options}
      severity={props.type}  
      variant={props.variant} 
      >{props.label}</Alert>
      )
  };

export default Alerts;
