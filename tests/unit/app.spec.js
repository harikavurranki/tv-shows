import { shallowMount, createLocalVue } from '@vue/test-utils';
import app from '../../src/App.vue';
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'
import VueRouter from 'vue-router'
import { routes } from '@/router/index.js'

describe('In App Component', () => {
  let appWrapper;
  const router = new VueRouter({routes})
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    appWrapper = shallowMount(app, {
      localVue,
      router
    });
  });
  afterEach(() => {
    appWrapper.destroy();
  });
  it('is a Vue instance', () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(appWrapper.html()).toContain('<div id="app">');
  });
  it('it should have a div element with id="app"', () => {
    expect(appWrapper.attributes('id')).toBe('app');
  });
});
