import ShowService from '@/services/shows.js'
import CommonService from '@/services/index.js'
const baseURL = 'http://api.tvmaze.com'

jest.mock('../../../src/services/index.js')

describe('Show service testz', () => {
  it('Show details',()=>{
    const data = []
    CommonService.getData.mockResolvedValue(data)
    ShowService.getShowDetails().then((res)=>{
    	expect(result).toEqual(data)
    })
  })
  it('Show seasons',()=>{
    const data = [];
    CommonService.getData.mockResolvedValue(data)
    ShowService.getShowSeasons().then(((res)=>{
    	expect(result).toEqual(data);
    }))
  })
  it('Show episodes',()=>{
    const data = []
    CommonService.getData.mockResolvedValue(data)
    ShowService.getEpisodesDataBySeasonId().then(((res)=>{
    	expect(result).toEqual(data)
    }))
  })
  it('Search results',()=>{
    const data = []
    CommonService.getData.mockResolvedValue(data);
    ShowService.getSearchResultsByQuery().then(((res)=>{
    	expect(result).toEqual(data);
    }))
  })
})