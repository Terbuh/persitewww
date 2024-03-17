'use client'
import styles from './taskColumn.module.scss';
import TaskContainer from '../taskContainer/taskContainer';
import { Droppable } from 'react-beautiful-dnd';

const TaskColumn = ({title, tasks, id}) => {
    return (
        <div className={styles.taskColumn}>
            <Droppable droppableId={id}>
                <div className={styles.taskContainer}>
                    <TaskContainer />
                </div>
            </Droppable> 
        </div>
    );
}
export default TaskColumn;