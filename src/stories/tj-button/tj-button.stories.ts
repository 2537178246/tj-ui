import TjButton from '../../../packages/tj-button/index.vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Example/TjButton',
  component: TjButton
} as Meta<typeof TjButton>

const Template: StoryFn<typeof TjButton> = (args) => ({
  components: { TjButton },
  setup() {
    return { args }
  },
  template: '<tj-button v-bind="args"/>'
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  label: 'Buttons'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'large',
  label: 'Button'
}
