import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className='flex flex-col items-center h-screen -mt-20 -mb-14'>
      <h1 className='text-7xl mt-96 mb-10'>404</h1>
      <p className='text-xl'>You have strayed far from the pond.</p>
      <button className='btn btn-accent mt-10' onClick={goBack}>
        Go back
      </button>
    </main>
  );
};

export default NotFound;
