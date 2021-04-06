import React from 'react';

import Button from './Button';

export default{
    title:'Button',
    component:Button
}

const Template = (args) => <Button primary="true" {...args}/>


export const Register= Template.bind({});
Register.args={
    label:'Register',
    backgroundColor:'#c2eaf2',
    onClick:'alert("register button clicked")'
}

export const Login= Template.bind({});
Login.args={
    label:'Login',
    backgroundColor:'#e7e7e7',
    onClick:'alert("Login button clicked")'
}

