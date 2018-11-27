import React from 'react';
import './Button.css';

const Button = (props)=>{
    let classes=['Button'];
    if(props.class){
        classes.push(props.class);
        classes = classes.join(" ");
    }
    return(
        <div onClick={props.click} data-value={props.number} className= {classes}>
            <p>{props.number}</p>
        </div>
    )
}


export default Button;