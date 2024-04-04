import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStudents } from '../services/students';

const Students = ({ students }) => {
  // Fetching all students here, keeping the fetch as contained as possible to be used only where relevant
  const [data, setData] = useState([]);

  useEffect(() => {
    getStudents().then((data) => setData(data));
  }, []);

  return (
    <div>
      <h2>Here are all our students</h2>
      {data.map((data) => (
        <Link key={data.login.uuid} to={`/students/${data.login.uuid}`}>
          <p>
            {data.name.title} {data.name.first} {data.name.last}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Students;
