import { mount } from '@vue/test-utils'
import GameMessage from '@/components/GameMessage'

describe('@components/GameMessage', () => {
  describe('success', () => {
    it('renders its content', () => {
      const wrapper = mount(GameMessage, {
        propsData: {
          status: '',
        },
      })

      // check the name of the component
      expect(wrapper.name()).toMatch('GameMessage')
    })
  })
})
