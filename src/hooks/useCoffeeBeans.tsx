import { useState, useEffect } from 'react';
import axios from 'axios';

interface CoffeeBean {
  id: string;
  name: string;
  origin: string;
  roastLevel: string;
  rating?: number;
  description?: string;
  // Add more properties as needed
}

export const useCoffeeBeans = () => {
  const [beans, setBeans] = useState<CoffeeBean[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeans = async () => {
      try {
        setLoading(true);
        // Adjust the API endpoint to match your backend
        const response = await axios.get('/api/beans');

        // Check the actual structure of the response data
        console.log('API response:', response.data);

        // Make sure we're setting an array
        const beansData = Array.isArray(response.data)
          ? response.data
          : response.data.beans || response.data.content || [];

        setBeans(beansData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch coffee beans. Please try again later.');
        console.error('Error fetching beans:', err);
        // Initialize beans as empty array in case of error
        setBeans([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBeans();
  }, []);

  return { beans, loading, error };
};
