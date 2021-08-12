import { shallowMount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld.vue', () => {
  let wrapper: ReturnType<typeof shallowMount>
  let msg: string

  beforeAll(() => {
    msg = 'new message'
    wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    })
  })

  it('renders props.msg when passed', () => {
    expect(wrapper.text()).toMatch(msg)
  })
})
