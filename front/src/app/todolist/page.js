import Navbar from '@/app/todolist/components/navbar/navbar'
import React from 'react'
import MainBackground from './components/mainBackground/mainBackground'
import TaskColumn from './components/taskColumn/taskColumn'

export default function ToDoList() {
    return (
        <div>
            <Navbar />
            <MainBackground />
        </div>
    )
}
