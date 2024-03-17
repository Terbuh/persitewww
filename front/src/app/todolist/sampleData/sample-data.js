const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Jeden'},
        'task-2': { id: 'task-2', content: 'Dwa'},
        'task-3': { id: 'task-3', content: 'Trzy'},
        'task-4': { id: 'task-4', content: 'Cztery'}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    // potem mozna to przeorganizowac na zmienianie orderu kolumn
    columnOrder: ['column-1'],
}

export default initialData;