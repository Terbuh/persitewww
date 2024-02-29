import styles from './taskColumn.module.scss';
import TaskContainer from '../taskContainer/taskContainer';

const TaskColumn = () => {
    return (
        <div className={styles.taskColumn}>
            <div className={styles.taskContainer}>
                <TaskContainer />
            </div>
        </div>
    );
}
export default TaskColumn;