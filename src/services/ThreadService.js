import axios from 'axios';

class ThreadService {
  static async allThreads() {
    try {
      const response = await axios.get('http://localhost:4000/threads');
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export default ThreadService;
