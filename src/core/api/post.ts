import apiCreator from './apiCreator';

export const getPosts = () => apiCreator.get('/post');
