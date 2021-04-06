import React from 'react';


const Loginform=({type,name,placeholder})=> {
    return (
        <form>
            <fieldset>
                <legend></legend>
                    <input type={type} name={name} placeholder={placeholder} />
                    <input type={type} name={name} placeholder={placeholder} />
            </fieldset>
        </form>
    )
}

export default Loginform
