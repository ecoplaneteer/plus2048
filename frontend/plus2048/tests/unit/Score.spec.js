import { shallowMount } from '@vue/test-utils'
import Score from '@/components/Score'

describe('@components/Score', () => {
  describe('success', () => {
    it('renders its content', () => {
      const wrapper = shallowMount(Score)

      // check the name of the component
      expect(wrapper.name()).toMatch('Score')
    })
  })
})
