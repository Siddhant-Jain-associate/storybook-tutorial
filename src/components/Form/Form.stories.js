import React from 'react';

import Form from './Form';

export default{
    title:'Form',
    component:Form
}

const template = (args)=> <Form {...args}/>

export const Loginform = template.bind({});
Loginform.args={
    formname:'Login'
}

export const Registerform = template.bind({});
Registerform.args={
    formname:'Registeration'
}
