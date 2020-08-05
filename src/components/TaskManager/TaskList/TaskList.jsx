import React, {Component} from 'react'
import TaskItem from './TaskItem/TaskItem';
import { ListGroup } from 'reactstrap';

class TaskList extends Component{
    render(){
        const {tasks} = this.props;

        if(tasks.length === 0){
            return(
                <h4>No new tasks!</h4>
            )
        }
        return(
            <ListGroup>
                {tasks.map(t => <TaskItem key={t.id} task={t} />)}
            </ListGroup>
        )}
}

export default TaskList;