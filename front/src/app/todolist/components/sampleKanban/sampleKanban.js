'use client';

// components/KanbanBoard.js

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: 'task1', content: 'Task 1' },
      { id: 'task2', content: 'Task 2' },
      { id: 'task3', content: 'Task 3' },
    ],
    inProgress: [],
    done: [],
  });

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceTasks = tasks[source.droppableId];
    const destinationTasks = tasks[destination.droppableId];

    const newSourceTasks = Array.from(sourceTasks);
    const newDestinationTasks = Array.from(destinationTasks);

    newSourceTasks.splice(source.index, 1);
    newDestinationTasks.splice(destination.index, 0, sourceTasks.find(task => task.id === draggableId));

    setTasks({
      ...tasks,
      [source.droppableId]: newSourceTasks,
      [destination.droppableId]: newDestinationTasks,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex' }}>
        {Object.keys(tasks).map((columnId) => (
          <div key={columnId} style={{ margin: 8 }}>
            <h2>{columnId}</h2>
            <Droppable droppableId={columnId}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: 'lightgrey',
                    padding: 4,
                    width: 250,
                    minHeight: 500,
                  }}
                >
                  {tasks[columnId].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: 'none',
                            padding: 16,
                            margin: '0 0 8px 0',
                            backgroundColor: 'white',
                            ...provided.draggableProps.style,
                          }}
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;