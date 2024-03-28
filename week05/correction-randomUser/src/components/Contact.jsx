const Contact = ({ email, phone, location }) => {
  return (
    <>
      <p>
        Address: {location.street.name} {location.street.number},{' '}
        {location.city}
      </p>
      <p>Email: {email}</p>
      <p>Phone number: {phone}</p>
    </>
  );
};

export default Contact;
