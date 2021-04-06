import React from 'react'

const Button=({label,backgroundColor})=> {
    return (
        <button className="button" type="submit" style={{backgroundColor}}>{label}</button>
    )
}

export default Button;
