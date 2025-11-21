// src/api/postsApi.js
import { apiClient } from './client';
import { API_ROUTES } from './endpoints';

export async function getPosts() {
  return apiClient(API_ROUTES.POSTS);
}

export async function createPost(payload) {
  return apiClient(API_ROUTES.POSTS, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}