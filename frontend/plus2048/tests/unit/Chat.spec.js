import { shallowMount } from '@vue/test-utils'
import Chat from '@/views/Chat'

describe('@views/Chat', () => {
  describe('success', () => {
    it('renders its content', () => {
      const wrapper = shallowMount(Chat, {
        mocks: {
          $store: {
            state: {
              chat: {
                username: 'Nikita',
                messages: [],
              },
              socket: {
                isConnected: false,
              },
            },
          },
        },
      })

      // check the name of the component
      expect(wrapper.name()).toMatch('Chat')
    })
  })
})
