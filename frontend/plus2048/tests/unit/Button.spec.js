import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button'

describe('@components/Button', () => {
  describe('success', () => {
    it('renders its content', () => {
      const slotContent = 'Restart Game'
      const wrapper = shallowMount(Button, {
        slots: {
          default: slotContent,
        },
      })

      // check the name of the component
      expect(wrapper.name()).toMatch('Button')

      // check that title is rendered
      expect(wrapper.text()).toContain(slotContent)
    })
  })
})
