import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=RECHE1982';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: FETCH_POSTS, payload: data });
    });
  };
};

export const createPost = (values, callback) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values);

  return (dispatch) => {
    request.then((data) => {
      callback();
      dispatch({ type: CREATE_POST, payload: data });
    });
  };
};

export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: FETCH_POST, payload: data });
    });
  };
};

export const deletePost = (id, callback) => {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return (dispatch) => {
    request.then(() => {
      callback()
      dispatch({ type: DELETE_POST, payload: id });
    });
  };
};
