const SuperButton = ({ btnClick, text, alertText }) => {
  // Here the button's click event is controlled by the parent!
  // return <button onClick={btnClick}>{text}</button>;

  return <button onClick={() => alert(alertText)}>{text}</button>;
};

export default SuperButton;
