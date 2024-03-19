const Multiple = ({ number1, number2 = 1 }) => {
  const sum = number1 + number2;

  // Will be rendered as text content of the block div in parent component
  return `The total is: ${sum}`;

  // With its own JSX element
  // return <p>The total is: {sum}</p>;
};

export default Multiple;
