import { StoryObj, Meta } from '@storybook/react'
import Main from '.'

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main
}

export default meta
type Story = StoryObj<typeof Main>

export const Primary: Story = {
  args: {
    title: 'Teste',
    description: 'Typescript'
  }
}
