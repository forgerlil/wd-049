const ul = document.getElementById('users'); // Get the element where we will place our users
const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users

const renderUsers = (data) => {
  const users = data.results;
  console.debug({ users });

  return users.map((user) => {
    return (ul.innerHTML += `
    <li>
      <img src="${user.picture.medium}" />
      <p>${user.name.first} ${user.name.last}</p>
      <div>${user.email}</div>
    </li>`);
  });
};

/**
 * Don't edit the code above
 * ---
 * Below you will have to fetch the data from the link (stored in the variable url)
 * Once retrieved, you will pass the result as an argument of the function renderUsers
 */

// FETCH DATA WITH .THEN() AND .CATCH()
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then((users) => {
    renderUsers(users);
  })
  .catch(() => {
    console.warn('Error fetching data');
  });

// FETCHING DATA WITH ASYNC/AWAIT
const userData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Could not fetch data');
    }
    const data = await response.json();

    renderUsers(data);
  } catch (error) {
    console.log(error);
  }
};

// userData();
