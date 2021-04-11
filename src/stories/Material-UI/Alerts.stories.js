import React from 'react';
import Alert from '@material-ui/lab/Alert';

export default{
    title:'Material-UI/Alerts'
}

export const successAlert = () => <Alert severity="success">This is Success Alert!-Check it out.</Alert>
export const informationAlert = () => <Alert severity="info">This is Information Alert!-Check it out.</Alert>
export const warningAlert= () => <Alert severity="warning">This is Warning Alert!-Check it out.</Alert>
export const errorAlert= () => <Alert severity="error">This is Error Alert!-Check it out.</Alert>