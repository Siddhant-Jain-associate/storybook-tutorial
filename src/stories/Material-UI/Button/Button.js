import React from 'react';
import Button from '@material-ui/core/Button'


const Buttons = (props) => <Button onClick={props.clicked} variant={props.variant} size={props.size} color={props.color} disabled={props.Disabled}>{props.label}</Button>

export default Buttons;