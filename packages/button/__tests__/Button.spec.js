import Button from '../Button.vue';
import { mount } from '@vue/test-utils';

it('type', () => {
  const wrapper = mount(Button, {
    props: {
      type: 'primary'
    }
  });

  expect(wrapper.classes()).toContain('el-button--primary');
});
