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
    handleClick=(e)=>{
       this.updateExpression(e.target.getAttribute('data-value'));
    }
    handleReset=()=>{
        this.setState({expression:[], total:'',error:null});
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
            let total =Mathjs.parse(expression).compile().eval().toFixed(2);
            this.setState({total:total,error:null});
        }
        catch(err){
            this.setState({error:'Invalid expression',expression:[],total:''});
        }
    }

    updateExpression=(item)=>{
        this.setState((prevState)=>{
           return {expression:prevState.expression.concat(item)}
        });
    }
    render(){
        return(
            <Aux>
                <Display error={this.state.error} expression = {this.state.expression} total={this.state.total}/>
                <div className="Button_container">
                    <Button click={this.handleReset}  number="C" />
                    <Button  number=" " />
                    <Button  number=" " />
                    <Button click={this.handleClick} class="action" number="/" />
                    <Button click={this.handleClick} number="7" />
                    <Button click={this.handleClick} number="8" />
                    <Button click={this.handleClick} number="9" />
                    <Button click={this.handleClick} class="action" number="*" />
                    <Button click={this.handleClick} number="4" />
                    <Button click={this.handleClick} number="5" />
                    <Button click={this.handleClick}  number="6" />
                    <Button click={this.handleClick} class="action" number="-" />
                    <Button click={this.handleClick}  number="1" />
                    <Button click={this.handleClick}  number="2" />
                    <Button click={this.handleClick}  number="3" />
                    <Button click={this.handleClick} class="action" number="+" />
                    <Button click={this.handleClick} number="0" />
                    <Button click={this.handleClick} number="." />
                    <Button click={this.handleRemove} number="del" />
                    <Button click={this.handleEqual}  class="equal" number="=" />
                </div>
            </Aux>
        )
    }
}
export default Main;