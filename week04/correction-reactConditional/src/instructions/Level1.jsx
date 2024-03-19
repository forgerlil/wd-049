const Level1 = () => {
  return (
    <>
      <h4>Conditionally render content</h4>
      <ul>
        <li>
          It&apos;s time for the secret santa of the year. In{' '}
          <b>SecretSantaChat.js</b>, you have a variable for the gift you&apos;d
          like to receive from your secret santa. Replace the string with the
          type of gift you&apos;d like to receive.
        </li>
        <li>
          You have a ready component for you to display messages in the chat,
          named NewMessage.
        </li>
        <li>
          Your secret santa will give you a random gift back, from the{' '}
          <i>secretSantaGift</i> function. What could it be? Render a new
          message that says:
          <ul>
            <li>
              <i>
                &quot;I have received a -your chosen gift-, just what I
                wanted!&quot;
              </i>{' '}
              if your gift is what you asked for.
            </li>
            <li>
              <i>&quot;I got a -item received-&quot;</i> if you were gifted
              something else.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Level1;
