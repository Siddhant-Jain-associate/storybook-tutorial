import React from 'react';
import Form from './Loginform';

export default{
    title:"LoginForm",
    component:Form
}
const template = (args)=><Form {...args}/>

export const Login = template.bind({});

Login.args={
    formname:'LoginForm'
   
}