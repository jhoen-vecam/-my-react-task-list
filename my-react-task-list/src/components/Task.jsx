import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      
      <p>Id: {task.id}</p>
      <p>Tarea: {task.tarea}</p>
      <p>Completada: {task.completada ? 'Sí' : 'No'}</p>
    </div>
  );
};

export default Task;
