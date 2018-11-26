import React, { Component } from 'react';
import './Display.css';

class Display extends Component{
    componentDidMount(){
        console.log('[DISPLAY] MOUNTED');
    }
    render(){
        // console.log(this.props.expression);
        let expression= (this.props.expression.length) ? this.props.expression.join(' '):'';
        let total=this.props.total;
        if(this.props.error){
            total=this.props.error
        }
        return(
            <div className="Display">
                <p className="Expression">{expression}</p>
                <p className="Result">{total}</p>
            </div>
        )
    }
}
export default Display;