import axios from 'axios';
import CommonService from '@/services/index.js'

// Mock module with Jest mock functions
jest.mock('axios')

describe('Common service', () => {
  it('axios.create sets the baseUrl', () => {
    const data = [];
    axios.get.mockResolvedValue(data);
    CommonService.getData().then((res) =>{
      expect(res).toEqual(data);
    })
  });
});

 