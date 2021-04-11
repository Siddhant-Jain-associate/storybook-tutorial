import React from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

const RegisterForm=({formname})=> {
    return (
        <form>
            <fieldset>
                <legend><h2>{formname}</h2></legend><br/>
            <Input type="text" name="Name" placeholder="Enter your FullName" /><br/>
            <Input type="email" name="Email" placeholder="Enter your email" /><br/>
            <Input type="password" name="Password" placeholder="Enter your password" /><br/>
            <Input type="password" name="Confirm password" placeholder="Confirm Password" /><br/>
            <Button label="Register" backgroundColor='#c2eaf2'/>
            </fieldset>
        </form>
    )
}

export default RegisterForm
