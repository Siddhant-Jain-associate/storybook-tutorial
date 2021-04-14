import React from 'react';
import Alerts from './Alert';


export default{
    title:'Material-UI/Alerts',
    components:Alerts,
    argTypes:{
        Button:{
            type:'radio',
            options:['withUndo','withOutUndo']
        },

        variant:{
            control:{
                type:'radio',
                options:['outlined','filled']
            }
            
        }
    }

}


const AlertTemplate = (args) => <Alerts {...args}/>

export const successAlert = AlertTemplate.bind({});
successAlert.args={
    type:"success",
    label:"This is Success Alert!-Check it out."
}
const defaultInfoAlert=AlertTemplate.bind({});
defaultInfoAlert.args={
    type:"info",
    label:"This is info Alert!-check it out."
}

export const infoAlert = AlertTemplate.bind({});
infoAlert.args={
    type:"info",
    label:"This is info alert.Check it out."
}

export const warningAlert = AlertTemplate.bind({});
warningAlert.args={
    type:"warning",
    label:"This is warning Alert!-Check it out."
}

export const errorAlert = AlertTemplate.bind({});
errorAlert.args={
    type:"error",
    label:"This is Error Alert!-Check it out."
}


// export const successAlert = () => <Alert severity="success">This is Success Alert!-Check it out.</Alert>
// export const informationAlert = () => <Alert severity="info">This is Information Alert!-Check it out.</Alert>
// export const warningAlert= () => <Alert severity="warning">This is Warning Alert!-Check it out.</Alert>
// export const errorAlert= () => <Alert severity="error">This is Error Alert!-Check it out.</Alert>