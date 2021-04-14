import React from 'react';
import Alert from '@material-ui/lab/Alert';

const Alerts = (props) => (<Alert severity={props.type}  variant={props.variant} >{props.label}</Alert>);

export default Alerts;