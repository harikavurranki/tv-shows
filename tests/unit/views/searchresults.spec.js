import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import SearchResultsComponent from '@/views/SearchResults.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index.js'

describe('TV shows search results', () => {
  let searchWrapper;
  let localVue;
  let mockStore;
  const router = new VueRouter({routes})
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    mockStore = {
      state: {
        "searchResults": [
        {
          "score":28.12468,
          "show": { 
            "id":4,
            "url":"http://www.tvmaze.com/shows/4/arrow",
            "name":"Arrow",
            "type":"Scripted",
            "language":"English",
            "genres":["Drama","Action","Science-Fiction"],
            "status":"Ended",
            "runtime":60,
            "premiered":"2012-10-10",
            "officialSite":"http://www.cwtv.com/shows/arrow",
            "schedule":{"time":"21:00","days":["Tuesday"]},
            "rating":{"average":7.4},
            "weight":97,
            "network":
            {
              "id":5,
              "name":"The CW",
              "country":{
                "name":"United States",
                "code":"US",
                "timezone":"America/New_York"
              }
            },
            "webChannel":null,
            "externals":
            {
              "tvrage":30715,
              "thetvdb":257655,
              "imdb":"tt2193021"
            },
            "image":
            {
              "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg",
              "original":"http://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg"
            },
            "summary":"<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>",
            "updated":1601991685,
            "_links":
            {
              "self":
              {
                "href":"http://api.tvmaze.com/shows/4"
              },
              "previousepisode":
              {
                "href":"http://api.tvmaze.com/episodes/1744752"
              }
            }
          }
        }
      ]
    },
      dispatch: jest.fn(),
    };
    searchWrapper = shallowMount(SearchResultsComponent, {
      mocks: {
        $store: mockStore,
      },
      localVue,
      router
    });
  });
  afterEach(() => {
    searchWrapper.destroy();
  });
  it('is a Vue instance', () => {
    expect(searchWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(searchWrapper.html()).toContain('<div class="container pt-30">');
  });

  it('it should have a div element with id="container pt-30"', () => {
    expect(searchWrapper.attributes('class')).toBe('container pt-30');
  });
});
