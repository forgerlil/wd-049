const Search = () => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    console.log(newValue);
  };

  const withFocus = (e) => {
    // console.log('Search bar selected!');
    e.target.classList.remove('border-indigo-500');
    e.target.classList.add('border-red-400');
  };

  const handleBlur = (e) => {
    e.target.classList.add('border-indigo-500');
    e.target.classList.remove('border-red-400');
  };

  return (
    <input
      className='border-2 border-indigo-500'
      onChange={handleChange}
      onFocus={withFocus}
      onBlur={handleBlur}
      placeholder='Search...'
    />
  );
  // return <input placeholder='Search...' />;
};

export default Search;
