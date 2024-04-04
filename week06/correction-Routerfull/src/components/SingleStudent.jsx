import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleStudent } from '../services/students';

const SingleStudent = ({ students }) => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const [oneStudent, setOneStudent] = useState(null);

  // filtering students as frontend logic (if ie. API didn't serve a single student)
  // useEffect(() => {
  //   setOneStudent(students.find((student) => student.login.uuid === uuid));
  // }, []);

  // fetching an individual student based on uuid in the parameters
  useEffect(() => {
    getSingleStudent(uuid).then((student) => setOneStudent(student));

    // eslint-disable-next-line
  }, []);

  const goBack = () => {
    // relative to the history, goes back one to the last page
    navigate(-1);

    // OR by having a static path to navigate to, similar to a Link
    // navigate('/students');
  };

  return oneStudent ? (
    <div>
      <img
        src={oneStudent.picture.large}
        alt={`${oneStudent.name.first} ${oneStudent.name.last}`}
      />
      <p>
        {oneStudent.name.title} {oneStudent.name.first} {oneStudent.name.last}
      </p>
      <button onClick={goBack}>Go back</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default SingleStudent;
