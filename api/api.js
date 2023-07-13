import axios from 'axios';

const listPostURL = () => 'https://jsonplaceholder.typicode.com/posts';
const detailPostURL = id => `https://jsonplaceholder.typicode.com/posts/${id}`;
const apiCall = async endpoint => {
  const options = {
    method: 'GET',
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error: ', error);
    return {};
  }
};

export const fetchListPost = () => {
  let listURL = listPostURL();
  return apiCall(listURL);
};

export const fetchDetailPost = id => {
  let detailURL = detailPostURL(id);
  return apiCall(detailURL);
};
