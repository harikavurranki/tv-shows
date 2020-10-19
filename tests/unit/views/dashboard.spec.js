/* eslint-disable max-len */
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Shows from '../../../src/views/Shows.vue';
import VueRouter from 'vue-router'
import { routes } from '../../../src/router/index.js'

describe('In dog breeds header', () => {
  let dashboardWrapper;
  let localVue;
  let mockStore;
  const router = new VueRouter({routes})
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    mockStore = {
      state: {
          showDetails: {
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
      },
      dispatch: jest.fn(),
    };
    dashboardWrapper = shallowMount(Shows, {
      mocks: {
        $store: mockStore,
      },
      data () {
        return {
          
        }
      },
      localVue,
      router
    });
  });
  it('is a Vue instance', () => {
    expect(dashboardWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(dashboardWrapper.html()).toContain('pt30');
  });

  it('it should have a div element with id="app"', () => {
    expect(dashboardWrapper.attributes('class')).toBe('pt30');
  });
  it('sample', ()=>{
    // dashboardWrapper.vm.redirect()
    // expect(router.history.current.fullPath).toBe('/')
  })
});
