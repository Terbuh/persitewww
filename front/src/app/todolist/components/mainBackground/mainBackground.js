'use client'
import styles from './mainBackground.module.scss';
import TaskColumn from '@/app/todolist/components/taskColumn/taskColumn'
import VerticalLine from '@/app/todolist/components/verticalLine/verticalLine';
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

const MainBackground = () => {
const [completed, setCompleted] = useState([]);
const [incomplete, setIncomplete] = useState([]);

    return (
        <DragDropContext>
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
            </div>
        </DragDropContext>
    );
}
export default MainBackground;