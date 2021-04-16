import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';


const CheckBox = (props)=>{
    return(<Checkbox disabled={props.disabled} indeterminate={props.indeterminate} checked={props.checked} value={props.value} size={props.size} color={props.color}/>
)};

export default CheckBox;    