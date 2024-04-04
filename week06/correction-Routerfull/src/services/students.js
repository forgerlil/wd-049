import axios from 'axios';

export const getStudents = async () => {
  const { data } = await axios.get(`
    https://randomuser.me/api/?results=10&seed=8c35aba899651c92`);
  return data.results;
};

export const getSingleStudent = async (uuid) => {
  const { data } = await axios.get(
    `https://randomuser.me/api/?results=10&seed=8c35aba899651c92`
  );
  const singleStudent = data.results.find((user) => user.login.uuid === uuid);

  return singleStudent;
};
