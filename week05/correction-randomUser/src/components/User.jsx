import Contact from './Contact';

const User = ({ name, dob, picture, ...remainingKeys }) => {
  return (
    <div className='userProfile'>
      <img
        src={picture.large}
        alt={`${name.title} ${name.last}, ${name.first}`}
      />
      <div>
        <p>
          Name: {name.title} {name.last}, {name.first}
        </p>
        <p>Age: {dob.age}</p>
        <Contact {...remainingKeys} />
      </div>
    </div>
  );
};

export default User;
