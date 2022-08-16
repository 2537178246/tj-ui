import TjButton from '../../../packages/tj-button/index.vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Example/TjButton',
  component: TjButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 's', 'm', 'l']
    }
  }
} as Meta<typeof TjButton>

const Template: StoryFn<typeof TjButton> = (args) => ({
  components: { TjButton },
  setup() {
    return { args }
  },
  template: '<tj-button v-bind="args"/>'
})

export const Round = Template.bind({})
Round.args = {
  label: 'Button',
  round: true
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  round: false,
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  round: false,
  label: 'Button'
}
