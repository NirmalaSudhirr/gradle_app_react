import axios from 'axios';
import { CharacterStatus } from '../models/CharacterStatus';

//const API_BASE_URL = 'https://s35qhg7z-8000.inc1.devtunnels.ms';
const API_BASE_URL = 'https://nssr8xgv-8000.inc1.devtunnels.ms';

export const apiService = {
  async getPartDetails(partId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/grading_part_operation_details/${partId}`, {
        timeout: 7000
      });
      
      if (response.status === 200) {
        const data = response.data;
        if (data && data.length > 0) {
          return data.map(item => CharacterStatus.fromJson(item));
        } else {
          throw new Error('No data found for this Part ID.');
        }
      } else if (response.status === 404) {
        throw new Error('Part ID not found on server.');
      } else if (response.status >= 500) {
        throw new Error('Server error! Please try again later.');
      } else {
        throw new Error(`Unexpected error (${response.status}): ${response.statusText}`);
      }
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timed out. Please check your internet connection or try again later.');
      } else if (error.message.includes('Network Error')) {
        throw new Error('Cannot connect to server. Please check your internet or API status.');
      } else {
        throw new Error(error.message || 'Something went wrong');
      }
    }
  }
};
