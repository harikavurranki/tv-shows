import { shallowMount, createLocalVue } from '@vue/test-utils';
import FooterComponent from '@/components/footer/FooterComponent.vue';

describe('TV shows footer', () => {
  let footerWrapper;
  let localVue;
  beforeEach(() => {
    localVue = createLocalVue();
    footerWrapper = shallowMount(FooterComponent, {
      localVue,
    });
  });
  afterEach(() => {
    footerWrapper.destroy();
  });
  it('is a Vue instance', () => {
    expect(footerWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(footerWrapper.html()).toContain('<div class="header-bg pt-3 pb-3">');
  });

  it('it should have a div element with class="header-bg pt-3 pb-3"', () => {
    expect(footerWrapper.attributes('class')).toBe('header-bg pt-3 pb-3');
  });
  it('it should have 2020 © Shows hub. All rights reserved.', () => {
    expect(footerWrapper.text()).toMatch('2020 © Shows hub. All rights reserved.')
  });
});
