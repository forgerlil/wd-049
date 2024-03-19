import Contact from './Contact';

const User = ({ name, age, picture, ...rest }) => {
  return (
    <div className='userProfile'>
      <img src={picture} alt={name} />
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <Contact {...rest} />
      </div>
    </div>
  );
};

export default User;
