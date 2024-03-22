import { useState } from 'react';
import Instructions from './instructions/Instructions';
import DisplayToDos from './components/DisplayToDos';
import Form from './components/Form';

export default function App() {
  // This state should contain the array of to-dos
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || [
      {
        id: 1,
        title: 'Walk the dog!',
        deadline: '20/06/2023',
        priority: 'high',
        done: false,
      },
    ]
  );

  return (
    <div className='App'>
      <Instructions />
      <Form todos={todos} setTodos={setTodos} />
      <DisplayToDos todos={todos} setTodos={setTodos} />
    </div>
  );
}
