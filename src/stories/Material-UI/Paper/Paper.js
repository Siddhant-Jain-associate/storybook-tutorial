import React from 'react';
import Paper from '@material-ui/core/Paper';


const Papers = (props)=><Paper style={{width:"200px",height:"200px"}} square={props.square} elevation={props.elevation} variant={props.variant}/>

export default Papers;