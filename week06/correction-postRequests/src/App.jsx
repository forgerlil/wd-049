import { useState, useEffect } from 'react';
import Instructions from './instructions/Instructions';
import CreatePost from './components/CreatePost';
import BlogPost from './components/BlogPost';

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        <CreatePost setPostData={setPostData} />
      </div>
      <div className='block postsWrapper'>
        {postData ? (
          postData.map((post) => (
            <BlogPost key={post.id} title={post.title} body={post.body} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
