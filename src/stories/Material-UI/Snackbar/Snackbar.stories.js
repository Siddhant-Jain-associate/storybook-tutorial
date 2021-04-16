import React from 'react';
import Snackbars from './Snackbar';

export default {
    title:"Material-UI/Snackbar",
    component:Snackbars
}

const SnackbarTemplate = (args)=><Snackbars {...args}/>
export const defaultSnackbar = SnackbarTemplate.bind({});
defaultSnackbar.args={
    label:'Button Name',
    message:'Hello StoryBook',
    color:"Secondary",
    variant:'contained',
    vertical:'top',
    horizontal:'right'

} 