import { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ setPostData }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submit = (e) => {
    e.preventDefault();
    // FETCHING DATA WITH THE FETCH API
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   headers: { 'Content-type': 'application/json; charset=UTF-8' },
    //   body: JSON.stringify({
    //     userId: 24,
    //     title,
    //     body,
    //   }),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Failed to post data');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => setPostData((currentPosts) => [data, ...currentPosts]))
    //   .catch((error) => console.error(error));

    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        userId: 24,
        title,
        body,
      })
      .then((response) =>
        setPostData((currentPosts) => [response.data, ...currentPosts])
      )
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={submit}>
      <fieldset>
        <legend>
          <b>Create new post</b>
        </legend>
        <div>
          <label htmlFor='title'>
            <b>Post title:</b>
          </label>
          <input
            id='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='body'>
            <b>Post content:</b>
          </label>
          <textarea
            id='body'
            cols='50'
            rows='6'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button>Create post!</button>
      </fieldset>
    </form>
  );
};

export default CreatePost;
