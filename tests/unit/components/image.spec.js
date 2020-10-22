import { shallowMount, createLocalVue } from '@vue/test-utils';
import ImageComponent from '@/components/ImageComponent.vue';

describe('Each genre details', () => {
  let imageWrapper;
  let localVue;
  beforeEach(() => {
    localVue = createLocalVue();
    const cardData = {
      image: {
        medium: "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        original: "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
      },
      rating: { average: 6.5 },
      showName: 'Under the Dome'
    }
    imageWrapper = shallowMount(ImageComponent, {
      propsData: { cardData },
      localVue
    });
  });
  afterEach(() => {
    imageWrapper.destroy();
  });
  it('is a Vue instance', () => {
    expect(imageWrapper.isVueInstance).toBeTruthy();
  });
});
