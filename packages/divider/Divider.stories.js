import ElDivider from './Divider.vue';
import '../theme-chalk/lib/divider.css';

export default {
  title: 'Divider 分割线',
  component: ElDivider,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical']
      }
    }
  }
}

const Template = args => ({
  components: { ElDivider },
  setup() {
    return { args }
  },
  render() {
    return (
      <div>
        <span>编辑</span>
        <el-divider {...args}/>
        <span>删除</span>
      </div>
    )
  }
})

export const def = Template.bind({})
