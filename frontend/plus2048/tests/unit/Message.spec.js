import { shallowMount } from '@vue/test-utils'
import Message from '@/components/Message'

describe('@components/Message', () => {
  describe('success', () => {
    it('renders its content', () => {
      const wrapper = shallowMount(Message, {
        mocks: {
          $store: {
            state: {
              chat: {
                username: 'Nikita',
              },
            },
          },
        },
      })

      // check the name of the component
      expect(wrapper.name()).toMatch('Message')
    })
  })
})
