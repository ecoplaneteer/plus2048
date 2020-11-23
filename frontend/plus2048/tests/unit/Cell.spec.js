import { shallowMount } from '@vue/test-utils'
import Cell from '@/components/Cell'

describe('@components/Cell', () => {
  describe('success', () => {
    it('renders empty content', () => {
      const wrapper = shallowMount(Cell)

      // check the name of the component
      expect(wrapper.name()).toMatch('Cell')
    })
  })
})
