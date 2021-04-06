import React from 'react'

const Input=({type,name ,placeholder})=> {
    return (
        <div>
        <label for={name}>{name}: </label>
        <input type={type} name={name} placeholder={placeholder} 
        required/>
        </div>
    )
}

export default Input;
