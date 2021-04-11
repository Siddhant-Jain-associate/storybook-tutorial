import React from 'react';
import Register from './RegisterForm';

export default{
    title:'Registeration',
    component:Register
}


const Template = (args) => <Register {...args}/>

export const SignUp = Template.bind({});

SignUp.args={
    formname:"RegisterForm",
}