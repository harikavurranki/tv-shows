/* eslint-disable max-len */
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import FooterComponent from '../../../../src/components/footer/FooterComponent.vue';

describe('In dog breeds header', () => {
  let footerWrapper;
  let localVue;
  beforeEach(() => {
    localVue = createLocalVue();
    footerWrapper = shallowMount(FooterComponent, {
      localVue,
    });
  });
  it('is a Vue instance', () => {
    expect(footerWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(footerWrapper.html()).toContain('<div class="headerbg pt3 pb3">');
  });

  it('it should have a div element with id="app"', () => {
    expect(footerWrapper.attributes('class')).toBe('headerbg pt3 pb3');
  });
  it('it should have the Welcome to Dogs Breed App', () => {
    expect(footerWrapper.text()).toMatch('2020 © Shows hub. All rights reserved.')
  });
});
