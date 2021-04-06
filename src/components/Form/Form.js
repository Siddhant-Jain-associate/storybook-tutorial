import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button'

const Form = ({formname}) =>{
    if(formname==='Loginform'){
        return (
            <form >
                <fieldset>
                    <legend>{formname}</legend>
                    <Input />
                    <Input />
                    <Button />
                </fieldset>
                
            </form>
        )
    }else{
        return (
            <form >
                <fieldset>
                    <legend>{formname}</legend>
                    <Input />
                    <Button />
                </fieldset>
            </form>
        )
    }
    
}

export default Form;
