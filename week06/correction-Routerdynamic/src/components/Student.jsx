import { useParams } from 'react-router-dom';

const Student = () => {
  const { id } = useParams();

  return <div>Hello {id}!</div>;
};

export default Student;
