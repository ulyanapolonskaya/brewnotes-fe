import axios from 'axios';

const API_URL = 'http://localhost:5000/api/beans';
export interface Bean {
  id: string;
  name: string;
  rating: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export const fetchBeans = async (): Promise<Bean[]> => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching beans:', error);
    throw error;
  }
};
