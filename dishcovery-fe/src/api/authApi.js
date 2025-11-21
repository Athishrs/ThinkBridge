// src/api/authApi.js
import { apiClient } from './client';
import { API_ROUTES } from './endpoints';

export function registerUser(payload) {
  return apiClient(API_ROUTES.AUTH.REGISTER, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function loginUser(payload) {
  return apiClient(API_ROUTES.AUTH.LOGIN, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

