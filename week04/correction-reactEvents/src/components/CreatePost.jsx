const CreatePost = () => {
  const handleSubmit = (e) => {
    // In React, preventing the default of forms is particularly important, as it resets the app to its original state!
    e.preventDefault();

    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='UserName' name='username' />
      <textarea
        cols='50'
        rows='10'
        placeholder='Blog post'
        name='blogPost'
      ></textarea>
      <button>Post!</button>
    </form>
  );
};

export default CreatePost;
