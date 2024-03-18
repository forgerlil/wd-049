const AnimalCard = (receivedData) => {
  console.log(receivedData);

  return (
    <div className='card'>
      <img src={receivedData.imgSource} alt={receivedData.animalName} />
      <h4>{receivedData.animalName}</h4>
      <p>
        {receivedData.animalName} is a really beautiful cat, with a lot of sass
        and snuggles to give. He is 4 years old and is looking for a nap
        companion during those tough winter months. He is very self sufficient,
        and is able to find a snack wherever he goes. No food at hand? Not a
        problem, he will figure out how to open your trash and invite himself to
        the delicious leftovers of that dinner you never finished! And if
        something falls on the floor, it will be gone before you can count to
        three! Take him back home with you!
      </p>
    </div>
  );
};

export default AnimalCard;
