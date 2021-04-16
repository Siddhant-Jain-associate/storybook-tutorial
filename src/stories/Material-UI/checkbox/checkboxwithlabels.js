import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBox from './checkbox';

const Checkboxwithlabel = (props)=>{
    return(
        <div>
            <FormControlLabel control={<CheckBox />} label={props.label}/>
        </div>
    )
}

export default Checkboxwithlabel;