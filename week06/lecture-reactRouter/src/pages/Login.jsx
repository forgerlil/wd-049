import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='mt-[-1px] w-full h-screen flex items-center justify-center'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoggedIn(true);
          navigate('/');
        }}
        autoComplete='off'
        className='flex flex-col items-center justify-between bg-base-300 pt-4 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 2xl:w-1/3 transition-all'
      >
        <h1 className='mt-2 mb-8 lg:mb-16 text-2xl font-semibold text-white'>
          Login
        </h1>
        <div className='flex flex-col items-center justify-around h-1/2 w-full text-white'>
          <input
            type='text'
            placeholder='E-mail'
            name='email'
            value={form.email}
            onChange={handleChange}
            className='w-3/5 mb-8 p-2 outline-none border-b border-transparent focus:border-slate-100 bg-slate-500 rounded transition-all'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={form.password}
            onChange={handleChange}
            className='w-3/5 mb-8 p-2 outline-none border-b border-transparent focus:border-slate-100 bg-slate-500 rounded transition-all'
          />
        </div>
        <br />
        <div className='flex w-full'>
          <button className='w-1/2 bg-accent hover:bg-info-content hover:border-info-content rounded-none text-white font-normal text-lg p-4 transition-none uppercase'>
            Register
          </button>
          <button className='w-1/2 bg-success hover:bg-success-content hover:border-success-content rounded-none text-white font-normal text-lg py-4 transition-none uppercase'>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
