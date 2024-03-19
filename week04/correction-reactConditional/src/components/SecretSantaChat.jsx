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
        <NewMessage>
          {wishlist === gift
            ? `I have received a ${wishlist}, just what I wanted!`
            : `I got a ${gift}`}
        </NewMessage>
        {gift === 'ferrari' && (
          <NewMessage>
            <Ferrari />
          </NewMessage>
        )}
      </ChatFrame>
    </>
  );
};

export default SecretSantaChat;
