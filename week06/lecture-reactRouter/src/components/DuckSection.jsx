import DuckCard from './DuckCard';

const DuckSection = ({ ducks }) => {
  return (
    <section id='ducks'>
      <h2 className='text-3xl text-center my-16 mb-10'>
        <span role='img' aria-label='two ducks in a row'>
          {' '}
          🦆🦆{' '}
        </span>
        Our duck selection
        <span role='img' aria-label='two ducks in a row'>
          {' '}
          🦆🦆{' '}
        </span>
      </h2>
      <div id='duckCards' className='flex flex-wrap gap-4 justify-center p-10'>
        {ducks.map((duckObj) => (
          <DuckCard key={duckObj._id} duck={duckObj} />
        ))}
      </div>
    </section>
  );
};

export default DuckSection;
