import { shallowMount, createLocalVue } from '@vue/test-utils';
import app from '../../src/App.vue';
import HeaderComponent from '../../src/components/header/HeaderComponent.vue'
import FooterComponent from '../../src/components/footer/FooterComponent.vue'

describe('In App Component', () => {
  let appWrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    appWrapper = shallowMount(app, {
      localVue,
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
