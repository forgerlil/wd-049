import CatSection from './CatSection';
import DogSection from './DogSection';
import Form from './Form';

const WreckshipShelter = () => {
  return (
    // FRAGMENT
    <div className='block'>
      <h2>Wreckship Shelter</h2>
      <p>
        In our beautiful shelter we have lots of animals with quirky qualities
        to them. Are you in search of a challenge? Here you can find the perfect
        animal for you!
      </p>
      <CatSection />
      <DogSection />
      <Form />
    </div>
  );
};

export default WreckshipShelter;
