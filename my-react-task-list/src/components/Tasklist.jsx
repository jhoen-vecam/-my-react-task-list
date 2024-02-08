import React from 'react';
import Task from './Task';
import Tareas from '../tareas';

const TaskList = () => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {Tareas.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
