import { shallowMount, createLocalVue } from '@vue/test-utils';
import ImageComponent from '@/components/ImageComponent.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index.js'

describe('Each genre details', () => {
  let imageWrapper;
  let localVue;
  const router = new VueRouter({routes})
  beforeEach(() => {
    localVue = createLocalVue();
    const cardData = {
      image: {
        medium: "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        original: "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
      },
      id: 1,
      rating: { average: 6.5 },
      showName: 'Under the Dome'
    }
    imageWrapper = shallowMount(ImageComponent, {
      propsData: { cardData },
      localVue,
      router
    });
  });
  afterEach(() => {
    imageWrapper.destroy();
  });
  it('is a Vue instance', () => {
    expect(imageWrapper.isVueInstance).toBeTruthy();
  });
  it('is a Vue instance', () => {
    imageWrapper.vm.getShowId()
    expect(router.history.current.fullPath).toBe('/showdetails/1')
  });
});
