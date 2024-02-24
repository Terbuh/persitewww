import styles from './mainBackground.module.scss';
import TaskColumn from '@/app/todolist/components/taskColumn/taskColumn'
import VerticalLine from '@/app/todolist/components/verticalLine/verticalLine';

const MainBackground = () => {
    return (
        <div className={styles.mainBackground}>
            <div className={styles.taskColumn}>
                <TaskColumn />
            </div>
            <div className={styles.verticalLine}>
                <VerticalLine />
            </div>
            <div className={styles.taskColumn}>
                <TaskColumn />
            </div>
            <div className={styles.verticalLine}>
                <VerticalLine />
            </div>
            <div className={styles.taskColumn}>
                <TaskColumn />
            </div>
            <div className={styles.verticalLine}>
                <VerticalLine />
            </div>
            <div className={styles.taskColumn}>
                <TaskColumn />
            </div>
            <div className={styles.verticalLine}>
                <VerticalLine />
            </div>
            <div className={styles.taskColumn}>
                <TaskColumn />
            </div>
            <div className={styles.verticalLine}>
                <VerticalLine />
            </div>
            {/* <div className={styles.taskColumn}>
                <TaskColumn />
            </div>
            <div className={styles.taskColumn}>
                <TaskColumn />
            </div>
            <div className={styles.taskColumn}>
                <TaskColumn />
            </div>
            <div className={styles.taskColumn}>
                <TaskColumn />
            </div> */}
        </div>
    );
}
export default MainBackground;