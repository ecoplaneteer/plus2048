import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import Join from '@/views/Join'

const vuetify = new Vuetify()

describe('@views/Join', () => {
  describe('success', () => {
    it('renders its content', () => {
      const wrapper = shallowMount(Join, {
        mocks: {
          $vuetify: {
            breakpoint: {
              smAndUp: false,
            },
          },
        },

        vuetify,
      })

      // check the name of the component
      expect(wrapper.name()).toMatch('Join')
    })
  })
})
