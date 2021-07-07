import Divider from '../Divider.vue'
import { mount } from '@vue/test-utils'

it('type', () => {
  const wrapper = mount(Divider, {
    props: {
      type: 'horizontal'
    }
  })
  expect(wrapper.classes()).toContain('el-divider-horizontal')
})
