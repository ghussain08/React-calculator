import React, { Component } from 'react';
import Aux from '../../containers/hoc/hoc';
import Display from '../../containers/Display/Display';
import Button from '../../containers/Buttons/Button';
import Mathjs from 'mathjs';
class Main extends Component{
    state={
        total:null,
        expression:[],
        error:null
    };
    handleClick=(sign)=>{
       this.updateExpression(sign);
    }
    handleReset=()=>{
        this.setState({expression:[], total:''});
    }
    handleRemove=()=>{
        if(this.state.expression.length){
            this.state.expression.pop();
            this.setState({expression:this.state.expression});
        }
    }
    handleEqual=()=>{

        try{
            let expression = this.state.expression.join("");
            let total =Mathjs.parse(expression).compile().eval().toFixed(3);
            this.setState({total:total,error:null});
        }
        catch(err){
            this.setState({error:'Invalid expression',expression:[],total:''});
        }
    }

    updateExpression=(item)=>{
        let expression = this.state.expression.concat(item);
        this.setState( {expression:expression});
    }
    render(){
        return(
            <Aux>
                <Display error={this.state.error} expression = {this.state.expression} total={this.state.total}/>
                <div className="Button_container">
                    <Button click={this.handleReset}  number="C" />
                    <Button  number=" " />
                    <Button  number=" " />
                    <Button click={()=>{this.handleClick('/')}} class="action" number="/" />
                    <Button click={()=>{this.handleClick('7')}} number="7" />
                    <Button click={()=>{this.handleClick('8')}} number="8" />
                    <Button click={()=>{this.handleClick('9')}} number="9" />
                    <Button click={()=>{this.handleClick('*')}} class="action" number="X" />
                    <Button click={()=>{this.handleClick('4')}} number="4" />
                    <Button click={()=>{this.handleClick('5')}} number="5" />
                    <Button click={()=>{this.handleClick('6')}}  number="6" />
                    <Button click={()=>{this.handleClick('-')}} class="action" number="-" />
                    <Button click={()=>{this.handleClick('1')}}  number="1" />
                    <Button click={()=>{this.handleClick('2')}}  number="2" />
                    <Button click={()=>{this.handleClick('3')}}  number="3" />
                    <Button click={()=>{this.handleClick('+')}} class="action" number="+" />
                    <Button click={()=>{this.handleClick('0')}} number="0" />
                    <Button click={()=>{this.handleClick('.')}} number="." />
                    <Button click={this.handleRemove} number="del" />
                    <Button click={this.handleEqual}  class="equal" number="=" />
                </div>
            </Aux>
        )
    }
}
export default Main;