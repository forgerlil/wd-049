const DuckCard = ({ duck }) => {
  return (
    <div className='card w-96 bg-gray-900 h-[32rem] hover:scale-[1.02] hover:cursor-pointer transition-all'>
      <figure className='h-[70%] overflow-hidden'>
        <img
          src={duck.imgSrc}
          alt='HRM The queen, as a rubber duck'
          className='object-cover'
        />
      </figure>
      <div className='card-body gap-6 text-center'>
        <h2 className='card-title'>
          I am {duck.duckName}, and I will assist you with your debugging for
          this session.
        </h2>
        {duck.duckName === 'HRM The Queen' ? (
          <p>I am my own confidante</p>
        ) : (
          <p>
            I am {duck.owner.firstName} {duck.owner.lastName}&apos;s trusty
            confidante.
          </p>
        )}
      </div>
    </div>
  );
};

export default DuckCard;
