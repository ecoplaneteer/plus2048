import { shallowMount } from '@vue/test-utils'
import Container from '@/views/Container'

describe('@views/Container', () => {
  describe('success', () => {
    it('renders its content', () => {
      const wrapper = shallowMount(Container)

      // check the name of the component
      expect(wrapper.name()).toMatch('Container')
    })
  })
})
