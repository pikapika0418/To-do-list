import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';
import Task from '../../models/Task'

class TaskManager extends Component{

    state = {
        tasks: [
            new Task(1, 'Complete To-do app'),
            new Task(2, 'Do Leetcode'),
            new Task(3, 'Do Laundry')
        ]
    }

    addItem = (e) => {
        const {title, description } = e

        const newTask = new Task(
            this.state.tasks.length + 1,
            title,
            description
        )
        this.setState({
            tasks : [...this.state.tasks,
                    newTask]
        })
    }


    render(){
        const {tasks} = this.state;

        return (
            <Row>
                <Col>
                    <TaskForm add={this.addItem} />
                </Col>

                <Col>
                    <TaskList tasks={tasks} />
                </Col>
            </Row >
        )
    }
}

export default TaskManager;