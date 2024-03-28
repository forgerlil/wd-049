import { useEffect, useState } from 'react';
import Instructions from './instructions/Instructions';
import User from './components/User';
import fetchData from './utils/fetchData';

export default function App() {
  const url = 'https://randomuser.me/api/?results=10';
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok)
          throw new Error(`${response.status}: Could not fetch users`);
        return response.json();
      })
      .then((data) => setData(data.results))
      .catch((error) => console.error(error));

    // Using a function to handle data fetching
    // fetchData(url).then((users) => setData(users.results));

    return () => controller.abort();
  }, []);

  // console.log(data);

  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        {data.map((data, index) => (
          <User key={data.login.uuid} {...data} />
        ))}
        {/* <User /> */}
      </div>
    </div>
  );
}
