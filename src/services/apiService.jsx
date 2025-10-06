import axios from 'axios';
import { CharacterStatus } from '../models/CharacterStatus';

//const API_BASE_URL = 'https://1q3qnkbx-8000.inc1.devtunnels.ms';
const API_BASE_URL = 'http://127.0.0.1:8000';

export const apiService = {
  async getPartDetails(partId) {
    console.log(`[API CALL] Fetching part details for Part ID: ${partId}`);

    try {
      const url = `${API_BASE_URL}/grading_part_operation_details/${partId}`;
      //const url ='https://1q3qnkbx-8000.inc1.devtunnels.ms/grading_part_operation_details/CP25E1701';
      console.log(`[API CALL] Request URL: ${url}`);

      const response = await axios.get(url, { timeout: 7000 });
      console.log(`[API RESPONSE] Status: ${response.status}`, response.data);

      if (response.status === 200) {
        const data = response.data;
        if (data && data.length > 0) {
          console.log(`[API SUCCESS] Received ${data.length} items`);
          return data.map(item => CharacterStatus.fromJson(item));
        } else {
          console.warn('[API WARNING] No data found for this Part ID.');
          throw new Error('No data found for this Part ID.');
        }
      } else if (response.status === 404) {
        console.error('[API ERROR] Part ID not found on server.');
        throw new Error('Part ID not found on server.');
      } else if (response.status >= 500) {
        console.error('[API ERROR] Server error:', response.status);
        throw new Error('Server error! Please try again later.');
      } else {
        console.error(`[API ERROR] Unexpected response: ${response.status} - ${response.statusText}`);
        throw new Error(`Unexpected error (${response.status}): ${response.statusText}`);
      }

    } catch (error) {
      console.error('[API ERROR] Full error:', error);

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
