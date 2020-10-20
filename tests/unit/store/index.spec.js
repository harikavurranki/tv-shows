import { shallowMount, createLocalVue } from '@vue/test-utils';
import { store, state, mutations, actions } from '@/store/index.js'
import CommonService from '@/services/shows.js'
import flushPromises from 'flush-promises'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
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
    const data = {
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
          }
        ]
      }
    }
    mutations.SET_SHOWDETAILS(state, data);
    expect(state.showDetails).toBe(data);
  });
  it('SET_SHOWDATA mutation should set state.showData value to showData', () => {
    const data = {
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
    }
    mutations.SET_SHOWDATA(state, data);
    expect(state.showData).toBe(data);
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
    await actions.getShowsList(context)
  })
  it('Calling search API', async () => {
    const data = {'query':'arrow'}
    await actions.getSearchResults(context, data)
  })
  it('Calling season details API', async () => {
    await actions.getSeasonDetails(context, 7)
    // const data = [{"id":14,"url":"http://www.tvmaze.com/seasons/14/homeland-season-1","number":1,"name":"","episodeOrder":12,"premiereDate":"2011-10-02","endDate":"2011-12-18","network":{"id":9,"name":"Showtime","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/70/176582.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/70/176582.jpg"},"summary":"<p>Carrie investigates and ultimately becomes obsessed with returned POW marine Nicholas Brody, who may or may not be an al-Qaeda-trained terrorist; Brody struggles to resume his life with his wife and children whom he barely knows.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/14"}}},{"id":15,"url":"http://www.tvmaze.com/seasons/15/homeland-season-2","number":2,"name":"","episodeOrder":12,"premiereDate":"2012-09-30","endDate":"2012-12-16","network":{"id":9,"name":"Showtime","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/70/176583.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/70/176583.jpg"},"summary":"<p>Carrie continues her hunt for Abu Nazir while maintaining a complicated personal/professional relationship with Brody; Brody is forced to work more closely with the CIA; Saul discovers a clandestine plot.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/15"}}},{"id":16,"url":"http://www.tvmaze.com/seasons/16/homeland-season-3","number":3,"name":"","episodeOrder":12,"premiereDate":"2013-09-29","endDate":"2013-12-15","network":{"id":9,"name":"Showtime","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/70/176584.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/70/176584.jpg"},"summary":"<p>Carrie goes to extraordinary lengths to solve the latest crisis at the CIA; Brody struggles to survive; Saul must play many opposing sides to keep his job at the CIA.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/16"}}},{"id":17,"url":"http://www.tvmaze.com/seasons/17/homeland-season-4","number":4,"name":"","episodeOrder":12,"premiereDate":"2014-10-05","endDate":"2014-12-21","network":{"id":9,"name":"Showtime","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/70/176585.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/70/176585.jpg"},"summary":"<p>Carrie's CIA career takes off when she becomes an overseas station chief, but but every drone strike and tactical raid comes at a cost and she quickly learns the true price of power. Saul fights to stay in the intelligence game.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/17"}}},{"id":8902,"url":"http://www.tvmaze.com/seasons/8902/homeland-season-5","number":5,"name":"","episodeOrder":12,"premiereDate":"2015-10-04","endDate":"2015-12-20","network":{"id":9,"name":"Showtime","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/70/176586.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/70/176586.jpg"},"summary":"<p>Out of CIA and living in Berlin, Carrie is trying to start a new life but realizes now she's the one with a target on her back. One thing quickly becomes clear – she's never been at greater risk or with more to lose.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/8902"}}},{"id":46737,"url":"http://www.tvmaze.com/seasons/46737/homeland-season-6","number":6,"name":"","episodeOrder":12,"premiereDate":"2017-01-15","endDate":"2017-04-09","network":{"id":9,"name":"Showtime","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/151/379612.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/151/379612.jpg"},"summary":"<p>Several months later after she thwarted a terrorist attack in Berlin, Carrie back on American soil, living in Brooklyn, New York. She has begun working at a foundation whose efforts are to provide aid to Muslims living in the U.S. Season six will tackle the after effects of the U.S. presidential election, with the entire season taking place between election day and the inauguration. It's a strange, transitional time in the halls of government filled with anxiety and different competing interests, where a very fragile and complex transfer of power takes place between the outgoing president and the incoming president-elect.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/46737"}}},{"id":78280,"url":"http://www.tvmaze.com/seasons/78280/homeland-season-7","number":7,"name":"","episodeOrder":12,"premiereDate":"2018-02-11","endDate":"2018-04-29","network":{"id":9,"name":"Showtime","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/236/591167.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/236/591167.jpg"},"summary":"<p>At the end of last season, following an assassination attempt on her life, President Keane broke her promise to Carrie by arresting 200 members of the intelligence community without bringing charges against them, including Saul Berenson. As season seven begins, Carrie has left her job in the White House and moved back to D.C. and is living with her sister Maggie to take on the Keane administration and secure the release of the 200.</p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/78280"}}},{"id":78281,"url":"http://www.tvmaze.com/seasons/78281/homeland-season-8","number":8,"name":"","episodeOrder":12,"premiereDate":"2020-02-09","endDate":"2020-04-26","network":{"id":9,"name":"Showtime","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/236/591160.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/236/591160.jpg"},"summary":"<p>The final season finds Carrie Mathison recovering from months of brutal confinement in a Russian gulag. Her body is healing, but her memory remains fractured – which is a problem for Saul, now National Security Advisor to the newly ascendant President Warner. The top priority of Warner's young administration is an end to the \"forever war\" in Afghanistan, and Saul has been dispatched to engage the Taliban in peace negotiations. But Kabul teems with warlords and mercenaries, zealots and spies – and Saul needs the relationships and expertise that only his protégé can provide. Against medical advice, Saul asks Carrie to walk with him into the lion's den – one last time. </p>","_links":{"self":{"href":"http://api.tvmaze.com/seasons/78281"}}}]
    // expect(state.showSeasonDetails).toBe(data)
  });
  it('Calling episode details API', async () => {
    // const data = [{},{}]
    // actions.getEpisodesData().mockImplementationOnce(calledWith => {
    //   return calledWith === 1
    //     ? Promise.resolve(data)
    //     : Promise.resolve()
    // })
    await actions.getEpisodesData(context, 1)
    // await flushPromises()
    // const data = [{"id":1,"url":"http://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot","name":"Pilot","season":1,"number":1,"type":"regular","airdate":"2013-06-24","airtime":"22:00","airstamp":"2013-06-25T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg"},"summary":"<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/1"}}},{"id":2,"url":"http://www.tvmaze.com/episodes/2/under-the-dome-1x02-the-fire","name":"The Fire","season":1,"number":2,"type":"regular","airdate":"2013-07-01","airtime":"22:00","airstamp":"2013-07-02T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/1/4389.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/1/4389.jpg"},"summary":"<p>While the residents of Chester's Mill face the uncertainty of life in the dome, panic is heightened when a house goes up in flames and their fire department is outside of the dome.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/2"}}},{"id":3,"url":"http://www.tvmaze.com/episodes/3/under-the-dome-1x03-manhunt","name":"Manhunt","season":1,"number":3,"type":"regular","airdate":"2013-07-08","airtime":"22:00","airstamp":"2013-07-09T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/1/4390.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/1/4390.jpg"},"summary":"<p>When a former deputy goes rogue, Big Jim recruits Barbie to join the manhunt to keep the town safe. Meanwhile, Junior is determined to escape the dome by going underground.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/3"}}},{"id":4,"url":"http://www.tvmaze.com/episodes/4/under-the-dome-1x04-outbreak","name":"Outbreak","season":1,"number":4,"type":"regular","airdate":"2013-07-15","airtime":"22:00","airstamp":"2013-07-16T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/1/4391.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/1/4391.jpg"},"summary":"<p>The people of Chester's Mill fall into a state of panic as an outbreak of meningitis strikes their community, threatening their already depleted medical supplies. Meanwhile, Julia continues to search for answers into her husband's disappearance.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/4"}}},{"id":5,"url":"http://www.tvmaze.com/episodes/5/under-the-dome-1x05-blue-on-blue","name":"Blue on Blue","season":1,"number":5,"type":"regular","airdate":"2013-07-22","airtime":"22:00","airstamp":"2013-07-23T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/1/4392.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg"},"summary":"<p>The Chester's Mill residents receive an unexpected visit from their loved ones on the other side. Meanwhile, the community braces for a threat from outside the Dome.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/5"}}},{"id":6,"url":"http://www.tvmaze.com/episodes/6/under-the-dome-1x06-the-endless-thirst","name":"The Endless Thirst","season":1,"number":6,"type":"regular","airdate":"2013-07-29","airtime":"22:00","airstamp":"2013-07-30T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/1/4393.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/1/4393.jpg"},"summary":"<p>When the town begins to run low on water, the residents of Chester's Mill begin to fight for the remaining resources. Meanwhile, Julia discovers a strange connection that two of the town's residents have with the Dome.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/6"}}},{"id":7,"url":"http://www.tvmaze.com/episodes/7/under-the-dome-1x07-imperfect-circles","name":"Imperfect Circles","season":1,"number":7,"type":"regular","airdate":"2013-08-05","airtime":"22:00","airstamp":"2013-08-06T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/1/4394.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/1/4394.jpg"},"summary":"<p>Big Jim takes matters into his own hands when he feels his authority slipping away, and the dome displays its power when a life is taken just as a newborn arrives.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/7"}}},{"id":8,"url":"http://www.tvmaze.com/episodes/8/under-the-dome-1x08-thicker-than-water","name":"Thicker Than Water","season":1,"number":8,"type":"regular","airdate":"2013-08-12","airtime":"22:00","airstamp":"2013-08-13T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/1/4395.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/1/4395.jpg"},"summary":"<p>Junior stands up to his father and is shattered when he discovers the truth about his mother's past. Meanwhile, Julia learns firsthand the powers of the \"mini dome\".</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/8"}}},{"id":9,"url":"http://www.tvmaze.com/episodes/9/under-the-dome-1x09-the-fourth-hand","name":"The Fourth Hand","season":1,"number":9,"type":"regular","airdate":"2013-08-19","airtime":"22:00","airstamp":"2013-08-20T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/1/4396.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/1/4396.jpg"},"summary":"<p>Big Jim and Barbie discover their lives are more intertwined than they knew when a mysterious woman, Maxine, shows up unexpectedly in Chester's Mill.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/9"}}},{"id":10,"url":"http://www.tvmaze.com/episodes/10/under-the-dome-1x10-let-the-games-begin","name":"Let the Games Begin","season":1,"number":10,"type":"regular","airdate":"2013-08-26","airtime":"22:00","airstamp":"2013-08-27T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/1/4397.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/1/4397.jpg"},"summary":"<p>Julia uncovers the truth about her husband's disappearance and unravels some of Chester's Mill's darkest secrets. Meanwhile, Maxine shows Barbie how she plans to take control of the town.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/10"}}},{"id":11,"url":"http://www.tvmaze.com/episodes/11/under-the-dome-1x11-speak-of-the-devil","name":"Speak of the Devil","season":1,"number":11,"type":"regular","airdate":"2013-09-02","airtime":"22:00","airstamp":"2013-09-03T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/1/4398.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/1/4398.jpg"},"summary":"<p>Big Jim turns the town against Barbie when the truth about his past is revealed. Meanwhile, Maxine makes it personal when she confronts Barbie's closest ally.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/11"}}},{"id":12,"url":"http://www.tvmaze.com/episodes/12/under-the-dome-1x12-exigent-circumstances","name":"Exigent Circumstances","season":1,"number":12,"type":"regular","airdate":"2013-09-09","airtime":"22:00","airstamp":"2013-09-10T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/1/4399.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/1/4399.jpg"},"summary":"<p>While the manhunt for Barbie continues, Big Jim gets the residents of Chester's Mill riled up and the town demands justice for all of Barbie's supposed crimes. Meanwhile, Joe and Norrie must find a new hiding place for the mini dome.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/12"}}},{"id":13,"url":"http://www.tvmaze.com/episodes/13/under-the-dome-1x13-curtains","name":"Curtains","season":1,"number":13,"type":"regular","airdate":"2013-09-16","airtime":"22:00","airstamp":"2013-09-17T02:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/1/4400.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/1/4400.jpg"},"summary":"<p>Secrets of the Dome are revealed and Big Jim is determined to put an end to Barbie once and for all. Meanwhile, Junior, Angie, Joe and Norrie discover who the Monarch is after receiving a shocking visit from a familiar face.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/13"}}}]
    // expect(state.seasonEpisodeDetails).toBe(data)
  });
  it('SET_SHOWNAME mutation calling using actions', async () => {
    await actions.setShowName(context, 'Drama')
    expect(state.showName).toBe('Drama')
  });
   it('SET_SHOWDATA mutation calling using actions', async () => {
    const data = {
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
    }
    await actions.setShowData(context, data)
    expect(state.showData).toStrictEqual(data)
  });
})
