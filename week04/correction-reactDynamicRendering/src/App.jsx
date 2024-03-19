import Instructions from './instructions/Instructions';
import User from './components/Users';
import users from './data/userData';

export default function App() {
  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}
