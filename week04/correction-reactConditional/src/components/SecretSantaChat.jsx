import secretSantaGift from '../utils/secretSantaGift';
import ChatFrame from './ChatFrame';
import Ferrari from './Ferrari';
import NewMessage from './NewMessage';

const SecretSantaChat = () => {
  const wishlist = 'sock kit';

  const gift = secretSantaGift(wishlist);

  return (
    <>
      <ChatFrame>
        <NewMessage>Hey there</NewMessage>
        <NewMessage>How are you?</NewMessage>
      </ChatFrame>
    </>
  );
};

export default SecretSantaChat;
