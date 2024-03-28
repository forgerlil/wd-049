const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok)
      throw new Error(`${response.status}: Could not fetch users`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
