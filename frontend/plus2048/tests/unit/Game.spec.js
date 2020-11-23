import { shallowMount } from '@vue/test-utils'
import Game from '@/views/Game'

describe('@views/Game', () => {
  describe('success', () => {
    it('renders its content', () => {
      const wrapper = shallowMount(Game, {
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
                score: 0,
                gameMode: 'anarchy',
                votingEndsAt: '2020/12/01 00:00:00',
                votes: [],
                userVoted: false,
              },
              socket: {
                isConnected: false,
              },
            },
          },
        },
      })

      // check the name of the component
      expect(wrapper.name()).toMatch('Game')
    })
  })
})
