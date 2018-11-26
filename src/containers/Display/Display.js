import React from 'react';
import './Display.css';

const Display =(props)=>{
    let expression= (props.expression.length) ? props.expression.join(' '):'';
    let total=props.total;
    if(this.props.error){
        total=props.error
    }
    return(
        <div className="Display">
            <p className="Expression">{expression}</p>
            <p className="Result">{total}</p>
        </div>
    )
}
export default Display;