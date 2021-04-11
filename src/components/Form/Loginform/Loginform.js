import React from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

const Loginform=({formname})=> {
    return (
        <form>
            <fieldset>
                <legend><h2>{formname}</h2></legend><br/>
                    <Input type="text" name="Email" placeholder="Enter your Email" /><br/>
                    <Input type="password" name="Password" placeholder="Enter password" /><br/>
                    <Button label="Login Button"  /> 
            </fieldset>
        </form>
    )
}

export default Loginform
