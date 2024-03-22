import { useState } from 'react';

const Form = ({ todos, setTodos }) => {
  // const [title, setTitle] = useState('Read a book');
  // const [date, setDate] = useState('');
  // const [priority, setPriority] = useState('medium');

  // const updateTitle = (e) => {
  //   setTitle(e.target.value);
  // };
  // const updateDate = (e) => {
  //   setDate(e.target.value);
  // };

  // const updatePriority = (e) => {
  //   setPriority(e.target.value);
  // };

  const [form, setForm] = useState({
    title: '',
    deadline: '',
    priority: '',
  });

  const handleForm = (e) => {
    setForm((currentForm) => ({
      ...currentForm,
      [e.target.name]: e.target.value,
    }));
  };

  const addToDo = (e) => {
    e.preventDefault();

    if (!form.title || !form.deadline || !form.priority) {
      return alert('Please fill in all fields!');
    }

    setTodos((allTodos) => {
      const newTodos = [
        ...allTodos,
        {
          id: allTodos.length + 1,
          done: false,
          ...form,
        },
      ];

      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });

    setForm({
      title: '',
      deadline: '',
      priority: '',
    });
  };

  return (
    <div className='block'>
      <form onSubmit={addToDo}>
        <fieldset>
          <legend>
            <h3>Add a To-do</h3>
          </legend>
          <div>
            <label htmlFor='title'>To Do</label>
            <input
              name='title'
              type='text'
              placeholder='To Do'
              value={form.title}
              onChange={handleForm}
            />
          </div>
          <div>
            <label htmlFor='deadline'>Deadline</label>
            <input
              name='deadline'
              type='date'
              value={form.deadline}
              onChange={handleForm}
            />
          </div>
          <div>
            <label>Priority?</label>
            <div>
              <label htmlFor='low'>low</label>
              <input
                id='low'
                name='priority'
                type='radio'
                value='low'
                checked={form.priority === 'low'}
                onChange={handleForm}
              />
            </div>
            <div>
              <label htmlFor='medium'>medium</label>
              <input
                id='medium'
                name='priority'
                type='radio'
                value='medium'
                checked={form.priority === 'medium'}
                onChange={handleForm}
              />
            </div>
            <div>
              <label htmlFor='hard'>high</label>
              <input
                id='hard'
                name='priority'
                type='radio'
                value='high'
                checked={form.priority === 'high'}
                onChange={handleForm}
              />
            </div>
          </div>
          <button>Add</button>
        </fieldset>
      </form>
    </div>
  );
};
export default Form;
