import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

class TaskForm extends Component{

    state = {
        title:'',
        description:''
    }

    addItem = (e) => {
        if(e.target.id === "title"){
            this.setState({
                title: e.target.value
            })
        }else if(e.target.id === "description"){
            this.setState({
                description: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state
        this.props.add(data);
        
        this.setState({
            title : '',
            description: ''
        })
    }

    render(){

        const{ title, description } = this.state;

        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" value={title} onChange= {this.addItem}/>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="description">Description</Label>
                    <Input type="textarea" value={description} id="description" rows={5} onChange={this.addItem}/>
                </FormGroup>

                <Button color="primary">Add</Button>
            </Form>
        )
    }
}

export default TaskForm;