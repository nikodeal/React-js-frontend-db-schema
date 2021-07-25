import axios from 'axios'



export const getUsersData = async (setterFunction) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setterFunction(res.data);
  } catch (err) {
    console.log(err.mag);
  }
};

export const getTodosData = async (setterFunction) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setterFunction(res.data);
  } catch (err) {
    console.log(err.mag);
  }
};
export const getPostsData = async (setterFunction) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setterFunction(res.data);
  } catch (err) {
    console.log(err.mag);
  }
};