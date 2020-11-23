import { shallowMount } from '@vue/test-utils'
import Board from '@/components/Board'

describe('@components/Board', () => {
  describe('success', () => {
    it('renders its content', () => {
      const wrapper = shallowMount(Board, {
        mocks: {
          $store: {
            state: {
              game: {
                grid: [
                  [0, 0, 2, 16, 16, 2],
                  [0, 2, 1024, 0, -1, 1024],
                  [0, 0, 0, 0, 0, 0],
                  [0, 4, 0, 0, 4, 2],
                  [32, 0, -1, 2, 0, 64],
                  [0, 0, 0, 0, 0, 0],
                ],
                status: 'playing',
              },
            },
          },
        },
      })

      // check the name of the component
      expect(wrapper.name()).toMatch('Board')
    })
  })
})
