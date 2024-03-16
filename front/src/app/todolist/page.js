import Navbar from '@/app/todolist/components/navbar/navbar'
import React from 'react'
import MainBackground from './components/mainBackground/mainBackground'
import TaskColumn from './components/taskColumn/taskColumn'
import KanbanBoard from './components/sampleKanban/sampleKanban'

export default function ToDoList() {
    return (
        <div>
            <div>
                 <Navbar />
            </div>
            {/* <MainBackground /> */}
            <div>
                <KanbanBoard />
            </div>
        </div>
    )
}
