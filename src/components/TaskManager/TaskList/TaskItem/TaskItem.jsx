import React from 'react';
import {Button} from 'reactstrap';
import { ListGroupItem } from 'reactstrap';

class TaskItem extends React.Component{

    render(){
        const { task } = this.props;
        return(
            <ListGroupItem>
                {task.title}
                <Button close/>
            </ListGroupItem>
        )
    }
}

export default TaskItem;