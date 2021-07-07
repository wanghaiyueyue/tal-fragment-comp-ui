import ElButton from './Button.vue'
export default {
  title: 'Button 按钮',
  component: ElButton,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] }},
    type: {},
    onClick: {}
  }
};

const Template = (args) => ({
  components: { ElButton },
  setup() {
    return { args };
  },
  render() {
    return (
      <el-button {...args}>测试按钮</el-button>
    )
  }
});

export const disabled = Template.bind({})
// export const Primary = Template.bind({});
// export const Secondary = Template.bind({});
// export const Large = Template.bind({});
// export const Small = Template.bind({});
