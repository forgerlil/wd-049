const Loading = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <p className='text-3xl'>Loading your IP</p>
      <span className='loading loading-dots loading-sm mt-6'></span>
    </div>
  );
};

export default Loading;
