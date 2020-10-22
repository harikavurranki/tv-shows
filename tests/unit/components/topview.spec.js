import { shallowMount, createLocalVue } from '@vue/test-utils';
import TopViewComponent from '@/components/TopViewComponent.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index.js'

describe('Each genre details', () => {
  let topViewWrapper;
  let localVue;
  const router = new VueRouter({routes})
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    const name = 'Search results'
    topViewWrapper = shallowMount(TopViewComponent, {
      propsData: { name },
      localVue,
      router
    });
  });
  afterEach(() => {
    topViewWrapper.destroy();
  });
  it('is a Vue instance', () => {
    expect(topViewWrapper.isVueInstance).toBeTruthy();
  });
  it('it should redirect to the dashboard', ()=>{
    topViewWrapper.vm.redirect()
    expect(router.history.current.fullPath).toBe('/')
  })
});
