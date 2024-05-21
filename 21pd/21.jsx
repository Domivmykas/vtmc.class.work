import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    // Duomenys apie užduotis bus saugomi čia
  ]);

  const addTask = (task, priority) => {
    // Metodas pridėti naują užduotį į tasks masyvą
  };

  return (
    <div>
      {/* Atvaizduokite užduotis */}
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.text}</h3>
          <p>Prioritetas: {task.priority}</p>
        </div>
      ))}

      {/* Forma, leidžianti pridėti naują užduotį */}
      <form>
        <input type="text" placeholder="Užduotis" />
        <select placeholder="Prioritetas">
          <option value="low">Niedramas</option>
          <option value="medium">Vidutinis</option>
          <option value="high">Aukštas</option>
        </select>
        <button type="submit">Pridėti</button>
      </form>
    </div>
  );
};

export default TaskList;