import React from 'react';

import Input from './Input';


export default{
    title:"Input",
    component:Input
}

const Template = (args) => <Input {...args} />

export const fullName = Template.bind({});

fullName.args={
    type:'text',
    name:'firstname',
    placeholder:'Enter Your First Name',
    required:true
}
export const email = Template.bind({});
email.args={
    type:'email',
    name:'email',
    placeholder:'Enter your Email',
    required:true
}

export const password = Template.bind({});
password.args={
    type:'password',
    name:'password',
    placeholder:'Enter Password',
    required:true
}
