/* eslint-disable max-len */
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index.js'

describe('TV shows header', () => {
  let headerWrapper;
  let localVue;
  let mockStore;
  const router = new VueRouter({routes})
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    mockStore = {
      state: {
        searchResults: []
      },
      dispatch: jest.fn(),
    };
    headerWrapper = shallowMount(HeaderComponent, {
      mocks: {
        $store: mockStore,
      },
      data () {
        return {
          query: 'arrow'
        }
      },
      localVue,
      router
    });
  });
  afterEach(() => {
    headerWrapper.destroy();
  });
  it('is a Vue instance', () => {
    expect(headerWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(headerWrapper.html()).toContain('<div class="header-bg pt-5 pb-5">');
  });
  it('it should have a div element with class="header-bg pt-5 pb-5"', () => {
    expect(headerWrapper.attributes('class')).toBe('header-bg pt-5 pb-5');
  });
  it('it should call the funtion after that need to check the route', ()=>{
    headerWrapper.vm.getDataBySearch()
    expect(router.history.current.fullPath).toBe('/search?name=arrow')
  })
});
