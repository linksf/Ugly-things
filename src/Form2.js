import React, {Component}from "react"
import {UglyThingsConsumer} from "./UglyThings"

class Form2 extends Component{
    state={
        title:"",
        description: ""
    }
    handleChange=(e)=>{
        const{name, value} = e.target
        this.setState({[name]: value})
    }         
    
    render(){
        const newObj= {
            title: this.state.title,
            description: this.state.description 
        }
        console.log(this.props.uglyThing)
    return(                    
     <UglyThingsConsumer> 
    {(context)=>(
        <form>
        <input 
        name="title"
        placeholder="TITLE"
        value={this.state.title}
        onChange={this.handleChange}
        />
        <input 
        name="description"
        placeholder="DESCRIPTION"
        value={this.state.description}
        onChange={this.handleChange}
        />
        <button onClick={(e)=>{
            e.preventDefault()
            context.edit(this.props.uglyThing, newObj)    
        }}
        > Submit 
        </button>
        </form>
    )}
    </UglyThingsConsumer> 
   
    )}
}
export default Form2



