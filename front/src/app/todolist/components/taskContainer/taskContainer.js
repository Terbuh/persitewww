import styles from '@/app/todolist/components/taskContainer/taskContainer.module.scss';
import TaskTitle from '@/app/todolist/components/taskContainer/taskTitle/taskTitle.module.scss'

const TaskContainer = () => {
    return (
        <div className={styles.taskContainer}>
            <TaskTitle /> 
        </div>
    );
}
export default TaskContainer;