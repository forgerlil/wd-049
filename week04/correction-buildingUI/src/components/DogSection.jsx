import AnimalCard from './AnimalCard';
import { dogData } from '../data/animalData.js';

const DogSection = () => {
  const dogs = ['Tabby', 'Billy', 'Leila'];
  const age = () => Math.floor(Math.random() * (10 - 1) + 1);
  const imgSrc = ['/dog1.jpg', '/dog2.jpg', '/dog3.jpg'];
  const descriptions = [];

  return (
    <section className='animalContainer'>
      <h3>Adopt a Dog!</h3>
      <div className='cardsContainer'>
        <AnimalCard animalName={dogs[0]} imgSource={imgSrc[0]} />
        <AnimalCard animalName={dogs[1]} imgSource={imgSrc[1]} />
        <AnimalCard animalName={dogs[2]} imgSource={imgSrc[2]} />
        {/* <div className='card'>
          <img src={imgSrc[0]} alt={dogs[0]} />
          <h4>{dogs[0]}</h4>
          <p>
            {dogs[0]} is the perfect combination between sweet and protective.
            This {age()} year old dog will give you loads of love, but it will
            also protect your house from the mailman like nobody&apos;s
            business, so you will never receive unwanted mail again (or any
            other kind). She enjoys the ocasional fetch ball game, but in
            general she would rather eat your shoes or dig a hole where you just
            planted that new Gardenia. Take her with you back home!
          </p>
        </div>
        <div className='card'>
          <img src={imgSrc[1]} alt={dogs[1]} />
          <h4>{dogs[1]}</h4>
          <p>
            {dogs[1]} is the perfect combination between sweet and protective.
            This {age()} year old dog will give you loads of love, but it will
            also protect your house from the mailman like nobody&apos;s
            business, so you will never receive unwanted mail again (or any
            other kind). She enjoys the ocasional fetch ball game, but in
            general she would rather eat your shoes or dig a hole where you just
            planted that new Gardenia. Take her with you back home!
          </p>
        </div>
        <div className='card'>
          <img src={imgSrc[2]} alt={dogs[2]} />
          <h4>{dogs[2]}</h4>
          <p>
            {dogs[2]} is the perfect combination between sweet and protective.
            This {age()} year old dog will give you loads of love, but it will
            also protect your house from the mailman like nobody&apos;s
            business, so you will never receive unwanted mail again (or any
            other kind). She enjoys the ocasional fetch ball game, but in
            general she would rather eat your shoes or dig a hole where you just
            planted that new Gardenia. Take her with you back home!
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default DogSection;
