// src/config/api.ts
const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  ENDPOINTS: {
    LISTINGS: {
      GET_ALL: '/listings',
      GET_ONE: (id: string) => `/listings/${id}`,
    },
  },
} as const;

export default API_CONFIG;
