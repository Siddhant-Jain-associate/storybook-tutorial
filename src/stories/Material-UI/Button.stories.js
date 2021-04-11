import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import {action} from '@storybook/addon-actions';

const Styles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

export default{
    title:"Material-UI/Button"
}

export const Default = () => (
    <Button onClick={action('Default button clicked')} variant="contained">
      Default
    </Button>
  );
  
  export const Primary = () => (
    <Button color="primary" onClick={action('Primary button clicked')} variant="contained">
      Primary
    </Button>
  );
  
  export const Secondary = () => (
    <Button color="secondary" onClick={action('Secondary button clicked')} variant="contained">
      Secondary
    </Button>
  );

  export const Disabled = () =>(
      <Button variant="contained" disabled>
          Disabled
      </Button>
  )

  export const size = () =>{
    const classes = Styles();
      return (
          
    <div>
        <div>
            <Button size="small" className={classes.margin}>
                Small
            </Button>
            <Button size="medium" className={classes.margin}>
                Medium
            </Button>
            <Button size="large" className={classes.margin}>
                Large
            </Button>
        </div>
        <div>
            <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                Small
            </Button>
            <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
                Medium
            </Button>
            <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                Large
            </Button>
        </div>
        <div>
            <Button variant="contained" size="small" color="primary" className={classes.margin}>
                Small
            </Button>
            <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                Medium
            </Button>
            <Button variant="contained" size="large" color="primary" className={classes.margin}>
                Large
            </Button>
        </div>
    </div>
  )};