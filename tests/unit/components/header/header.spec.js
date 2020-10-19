/* eslint-disable max-len */
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import HeaderComponent from '../../../../src/components/header/HeaderComponent.vue';
import VueRouter from 'vue-router'
import { routes } from '../../../../src/router/index.js'

describe('In dog breeds header', () => {
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
  it('is a Vue instance', () => {
    expect(headerWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(headerWrapper.html()).toContain('<div class="headerbg pt5 pb5">');
  });

  it('it should have a div element with id="app"', () => {
    expect(headerWrapper.attributes('class')).toBe('headerbg pt5 pb5');
  });
  it('sample', ()=>{
    headerWrapper.vm.getDataBySearch()
    expect(router.history.current.fullPath).toBe('/search?name=arrow')
  })
});
