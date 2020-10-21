import { store, state, mutations, actions } from '@/store/index.js'
import ShowService from '@/services/shows.js'
import flushPromises from 'flush-promises'

jest.mock('../../../src/services/shows.js')

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const mockData = 
{
  "id":1,
  "url":"http://www.tvmaze.com/shows/1/under-the-dome",
  "name":"Under the Dome",
  "type":"Scripted",
  "language":"English",
  "genres":["Drama","Science-Fiction","Thriller"],
  "status":"Ended","runtime":60,"premiered":"2013-06-24",
  "officialSite":"http://www.cbs.com/shows/under-the-dome/",
  "schedule":{"time":"22:00","days":["Thursday"]},
  "rating":{"average":6.5},
  "weight":97,
  "network": {
    "id":2,
    "name":"CBS",
    "country":{
      "name":"United States",
      "code":"US",
      "timezone":"America/New_York"
    }
  },
  "webChannel":null,
  "externals": {
    "tvrage":25988,
    "thetvdb":264492,
    "imdb":"tt1553656"
  },
  "image":{
    "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    "original":"http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
  },
  "summary":"<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
  "updated":1573667713,
  "_links":
  {
    "self": {
      "href":"http://api.tvmaze.com/shows/1"
    },
    "previousepisode": {
      "href":"http://api.tvmaze.com/episodes/185054"
    }
  }
}
const mockGenreData = 
{
  'Drama': {
    'label': 'Drama',
    'value':  [
    {
      "id":1,
      "url":"http://www.tvmaze.com/shows/1/under-the-dome",
      "name":"Under the Dome",
      "type":"Scripted",
      "language":"English",
      "genres":["Drama","Science-Fiction","Thriller"],
      "status":"Ended","runtime":60,"premiered":"2013-06-24",
      "officialSite":"http://www.cbs.com/shows/under-the-dome/",
      "schedule":{"time":"22:00","days":["Thursday"]},
      "rating":{"average":6.5},
      "weight":97,
      "network":
      {
        "id":2,
        "name":"CBS",
        "country":
        {
          "name":"United States",
          "code":"US",
          "timezone":"America/New_York"
        }
      },
      "webChannel":null,
      "externals":
      {
        "tvrage":25988,
        "thetvdb":264492,
        "imdb":"tt1553656"
      },
      "image":{
        "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        "original":"http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
      },
      "summary":"<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
      "updated":1573667713,
      "_links":
      {
        "self":
        {
          "href":"http://api.tvmaze.com/shows/1"
        },
        "previousepisode":
        {
          "href":"http://api.tvmaze.com/episodes/185054"
        }
      }
    }]
  }
}
describe('Mutations of the store', () => {
  it('SET_SEARCHRESULTS mutation should set state.searchResults value to searchResults', () => {
    const data = [{"score":28.12485,"show":{"id":4,"url":"http://www.tvmaze.com/shows/4/arrow","name":"Arrow","type":"Scripted","language":"English","genres":["Drama","Action","Science-Fiction"],"status":"Ended","runtime":60,"premiered":"2012-10-10","officialSite":"http://www.cwtv.com/shows/arrow","schedule":{"time":"21:00","days":["Tuesday"]},"rating":{"average":7.4},"weight":97,"network":{"id":5,"name":"The CW","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":30715,"thetvdb":257655,"imdb":"tt2193021"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg"},"summary":"<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>","updated":1601991685,"_links":{"self":{"href":"http://api.tvmaze.com/shows/4"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1744752"}}}}]
    mutations.SET_SEARCHRESULTS(state, data);
    expect(state.searchResults).toBe(data);
  });
  it('SET_EPISODEDETAILS mutation should set state.seasonEpisodeDetails value to seasonEpisodeDetails', () => {
    const data = [{"id":167,"url":"http://www.tvmaze.com/episodes/167/true-detective-1x01-the-long-bright-dark","name":"The Long Bright Dark","season":1,"number":1,"type":"regular","airdate":"2014-01-12","airtime":"21:00","airstamp":"2014-01-13T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/8/21961.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/8/21961.jpg"},"summary":"<p>Former Louisiana State CID partners Martin Hart and Rustin Cohle give separate statements to a pair of investigators about the murder of a prostitute, Dora Lange, 17 years earlier. As they look back, details of the crime, replete with occult overtones, are accompanied by insights into the detectives' volatile partnership and personal lives.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/167"}}}]
    mutations.SET_EPISODEDETAILS(state, data);
    expect(state.seasonEpisodeDetails).toBe(data);
  });
  it('SET_SEASONDETAILS mutation should set state.showSeasonDetails value to showSeasonDetails', () => {
    const data = [{"id":11,"url":"http://www.tvmaze.com/seasons/11/true-detective-season-1","number":1,"name":"","episodeOrder":8,"premiereDate":"2014-01-12","endDate":"2014-03-09","network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/13/34831.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/13/34831.jpg"},"summary":"<p>In 2012, two homicide investigators of the Louisiana State Police's Criminal Investigations Division - Rustin \"Rust\" Cohle and Martin \"Marty\" Hart - are summoned for questioning by detectives Maynard Gilbough and Thomas Papania over the Dora Lange murder investigation of 1995; they have not seen nor spoken to each other since an altercation concerning Martin's wife Maggie Hart over a decade prior. With many of the old files destroyed in Hurricane Rita, the two men are asked to recount the history of their working relationship, personal lives, and the Dora Lange murder investigation, as well as a series of other related individual cases as new evidence suggests that the perpetrator remains at large.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/11"}}}]
    mutations.SET_SEASONDETAILS(state, data);
    expect(state.showSeasonDetails).toBe(data);
  });
  it('SET_SHOWDETAILS mutation should set state.showDetails value to showDetails', () => {
    mutations.SET_SHOWDETAILS(state, mockGenreData);
    expect(state.showDetails).toBe(mockGenreData);
  });
  it('SET_SHOWDATA mutation should set state.showData value to showData', () => {
    mutations.SET_SHOWDATA(state, mockData);
    expect(state.showData).toBe(mockData);
  });
  it('SET_SHOWNAME mutation should set state.showName value to showName', () => {
    const data = 'Drama'
    mutations.SET_SHOWNAME(state, data);
    expect(state.showName).toBe(data);
  });
});
describe('Actions of the store', () => {
  const context = {
    commit: jest.fn()
  }
  it('Calling all the shows API', async () => {
    const data = { data: [mockData] }
    const showdata = {"Drama": {"label": "Drama", "value": [{"_links": {"previousepisode": {"href": "http://api.tvmaze.com/episodes/185054"}, "self": {"href": "http://api.tvmaze.com/shows/1"}}, "externals": {"imdb": "tt1553656", "thetvdb": 264492, "tvrage": 25988}, "genres": ["Drama", "Science-Fiction", "Thriller"], "id": 1, "image": {"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg", "original": "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"}, "language": "English", "name": "Under the Dome", "network": {"country": {"code": "US", "name": "United States", "timezone": "America/New_York"}, "id": 2, "name": "CBS"}, "officialSite": "http://www.cbs.com/shows/under-the-dome/", "premiered": "2013-06-24", "rating": {"average": 6.5}, "runtime": 60, "schedule": {"days": ["Thursday"], "time": "22:00"}, "status": "Ended", "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>", "type": "Scripted", "updated": 1573667713, "url": "http://www.tvmaze.com/shows/1/under-the-dome", "webChannel": null, "weight": 97}]}, "PopularShows": {"label": "Popular Shows", "value": [{"_links": {"previousepisode": {"href": "http://api.tvmaze.com/episodes/185054"}, "self": {"href": "http://api.tvmaze.com/shows/1"}}, "externals": {"imdb": "tt1553656", "thetvdb": 264492, "tvrage": 25988}, "genres": ["Drama", "Science-Fiction", "Thriller"], "id": 1, "image": {"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg", "original": "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"}, "language": "English", "name": "Under the Dome", "network": {"country": {"code": "US", "name": "United States", "timezone": "America/New_York"}, "id": 2, "name": "CBS"}, "officialSite": "http://www.cbs.com/shows/under-the-dome/", "premiered": "2013-06-24", "rating": {"average": 6.5}, "runtime": 60, "schedule": {"days": ["Thursday"], "time": "22:00"}, "status": "Ended", "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>", "type": "Scripted", "updated": 1573667713, "url": "http://www.tvmaze.com/shows/1/under-the-dome", "webChannel": null, "weight": 97}]}, "Science-Fiction": {"label": "Science-Fiction", "value": [{"_links": {"previousepisode": {"href": "http://api.tvmaze.com/episodes/185054"}, "self": {"href": "http://api.tvmaze.com/shows/1"}}, "externals": {"imdb": "tt1553656", "thetvdb": 264492, "tvrage": 25988}, "genres": ["Drama", "Science-Fiction", "Thriller"], "id": 1, "image": {"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg", "original": "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"}, "language": "English", "name": "Under the Dome", "network": {"country": {"code": "US", "name": "United States", "timezone": "America/New_York"}, "id": 2, "name": "CBS"}, "officialSite": "http://www.cbs.com/shows/under-the-dome/", "premiered": "2013-06-24", "rating": {"average": 6.5}, "runtime": 60, "schedule": {"days": ["Thursday"], "time": "22:00"}, "status": "Ended", "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>", "type": "Scripted", "updated": 1573667713, "url": "http://www.tvmaze.com/shows/1/under-the-dome", "webChannel": null, "weight": 97}]}, "Thriller": {"label": "Thriller", "value": [{"_links": {"previousepisode": {"href": "http://api.tvmaze.com/episodes/185054"}, "self": {"href": "http://api.tvmaze.com/shows/1"}}, "externals": {"imdb": "tt1553656", "thetvdb": 264492, "tvrage": 25988}, "genres": ["Drama", "Science-Fiction", "Thriller"], "id": 1, "image": {"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg", "original": "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"}, "language": "English", "name": "Under the Dome", "network": {"country": {"code": "US", "name": "United States", "timezone": "America/New_York"}, "id": 2, "name": "CBS"}, "officialSite": "http://www.cbs.com/shows/under-the-dome/", "premiered": "2013-06-24", "rating": {"average": 6.5}, "runtime": 60, "schedule": {"days": ["Thursday"], "time": "22:00"}, "status": "Ended", "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>", "type": "Scripted", "updated": 1573667713, "url": "http://www.tvmaze.com/shows/1/under-the-dome", "webChannel": null, "weight": 97}]}}
    ShowService.getShowDetails.mockImplementationOnce(calledWith => {
      return Promise.resolve(data)
    })
    await actions.getShowsList(context)
    await flushPromises()
    expect(context.commit).toHaveBeenCalledWith('SET_SHOWDETAILS', showdata)
  })
  it('Calling search API', async () => {
    const payload = {'query':'arrow'}
    const data = { data: [{}] }
    ShowService.getSearchResultsByQuery.mockImplementationOnce(calledWith => {
      return calledWith === 'arrow'
        ? Promise.resolve(data)
        : Promise.resolve()
    })
    await actions.getSearchResults(context, payload)
    await flushPromises()
    expect(context.commit).toHaveBeenCalledWith('SET_SEARCHRESULTS', data.data)
  })
  it('Calling season details API', async () => {
    const data = { data: [{}] }
    ShowService.getShowSeasons.mockImplementationOnce(calledWith => {
      return calledWith === 7
        ? Promise.resolve(data)
        : Promise.resolve()
    })
    await actions.getSeasonDetails(context, 7)
    await flushPromises()
    expect(context.commit).toHaveBeenCalledWith('SET_SEASONDETAILS', data.data)
  });
  it('Calling episode details API', async () => {
    const data = { data: [{}] }
    ShowService.getEpisodesDataBySeasonId.mockImplementationOnce(calledWith => {
      return calledWith === 1
        ? Promise.resolve(data)
        : Promise.resolve()
    })
    await actions.getEpisodesData(context, 1)
    await flushPromises()
    expect(context.commit).toHaveBeenCalledWith('SET_EPISODEDETAILS', data.data)
  });
  it('SET_SHOWNAME mutation calling using actions', async () => {
    await actions.setShowName(context, 'Drama')
    expect(state.showName).toBe('Drama')
  });
})
