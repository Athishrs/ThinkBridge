// src/api/client.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api';

async function handleResponse(response) {
  if (!response.ok) {
    const errorBody = await response.text().catch(() => '');
    const error = new Error(`API error: ${response.status}`);
    error.status = response.status;
    error.body = errorBody;
    throw error;
  }

  // Return JSON or empty object if no body
  try {
    return await response.json();
  } catch {
    return {};
  }
}

export async function apiClient(path, options = {}) {
  const url = `${BASE_URL}${path}`;

  const defaultHeaders = {
    'Content-Type': 'application/json'
  };

  const config = {
    method: 'GET',
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {})
    }
  };

  return handleResponse(await fetch(url, config));
}