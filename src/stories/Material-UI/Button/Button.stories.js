import React from 'react';
import Buttons from './Button';
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
    title:"Material-UI/Button",
    component:Buttons,
    argTypes: {
      color: {
        control: {
          type: 'radio',
          options: ['Primary', 'Secondary']
        }
      },
      size:{
        control:{
          type:'radio',
          options:['large','medium','small']
        }
      }
    },
}

const buttonTemplate  = (args) => <Buttons {...args}/>
export const defaultButton = buttonTemplate.bind({});
defaultButton.args={
  variant:"contained",
  label:"Default",
  Disabled:false
}
export const primaryButton = buttonTemplate.bind({});
primaryButton.args={
  variant:"contained",
  color:"Primary",
  label:"Primary",
  Disabled:false
}
export const secondaryButton = buttonTemplate.bind({});
secondaryButton.args={
  variant:"contained",
  color:"Secondary",
  label:"Secondary",
  Disabled:false
}

export const disabledButton = buttonTemplate.bind({});
disabledButton.args={
  variant:"contained",
  Disabled:true,
  label:"Disabled"
}








  // export const size = () =>{
  //   const classes = Styles();
  //     return (
          
  //   <div>
  //       <div>
  //           <Button size="small" className={classes.margin}>
  //               Small
  //           </Button>
  //           <Button size="medium" className={classes.margin}>
  //               Medium
  //           </Button>
  //           <Button size="large" className={classes.margin}>
  //               Large
  //           </Button>
  //       </div>
  //       <div>
  //           <Button variant="outlined" size="small" color="primary" className={classes.margin}>
  //               Small
  //           </Button>
  //           <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
  //               Medium
  //           </Button>
  //           <Button variant="outlined" size="large" color="primary" className={classes.margin}>
  //               Large
  //           </Button>
  //       </div>
  //       <div>
  //           <Button variant="contained" size="small" color="primary" className={classes.margin}>
  //               Small
  //           </Button>
  //           <Button variant="contained" size="medium" color="primary" className={classes.margin}>
  //               Medium
  //           </Button>
  //           <Button variant="contained" size="large" color="primary" className={classes.margin}>
  //               Large
  //           </Button>
  //       </div>
  //   </div>
  // )};