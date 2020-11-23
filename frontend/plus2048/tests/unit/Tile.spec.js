import { shallowMount } from '@vue/test-utils'
import Tile from '@/components/Tile'

describe('@components/Tile', () => {
  describe('success', () => {
    it('renders its content', () => {
      const wrapper = shallowMount(Tile, {
        propsData: {
          tile: {},
        },
      })

      // check the name of the component
      expect(wrapper.name()).toMatch('Tile')
    })
  })
})
