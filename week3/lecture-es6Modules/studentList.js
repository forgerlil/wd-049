const initialStudents = [
  { name: 'Hinal', age: 28 },
  { name: 'Sofie', age: 25 },
  { name: 'Bingbing', age: 29 },
];

const someMoreStudents = [
  { name: 'Jurgen', age: 35 },
  { name: 'Ophelia', age: 27 },
  { name: 'Patrick', age: 26 },
];

const rosterListing = document.querySelector('#rosterListing');

initialStudents.forEach((student) => {
  const p = document.createElement('p');
  p.textContent = `Name: ${student.name}, age: ${student.age}`;

  rosterListing.appendChild(p);
});

const loadMoreStudents = (e) => {
  someMoreStudents.forEach((student) => {
    const p = document.createElement('p');
    p.textContent = `Name: ${student.name}, age: ${student.age}`;

    rosterListing.appendChild(p);
  });
  e.target.disabled = true;
};

// Default export
// export default loadMoreStudents

// Named export
// export { someMoreStudents, loadMoreStudents };

// Named and default exports
export { someMoreStudents, loadMoreStudents as default };
