import { mount } from '@vue/test-utils';
import { test, expect, it } from 'vitest';

import ShowListItem from '../components/show-list-item.vue';
import show from './show.json';

test('show-list-item mount', () => {
  let wrapper;

  it('should mount', () => {
    // make sure that ShowListItem exists before testing it
    expect(ShowListItem).toBeTruthy();

    wrapper = mount(ShowListItem, { propsData: { show } });
  });

  it('should render with correct props', () => {
    // check that props are passed to the component
    expect(wrapper.html().includes(show.name)).toBe(true);
  });

  it('should match the previous snapshot', () => {
  // check that nothing changed from the last commit
    expect(wrapper.html()).toMatchSnapshot();
  });
});
