import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import RecordCount from './RecordCount.vue'

describe('RecordCount', () => {
  it('displays the provided total with plural form', () => {
    const wrapper = mount(RecordCount, {
      props: { total: 3 }
    })
    expect(wrapper.text()).toContain('3')
    expect(wrapper.text()).toContain('records')
  })

  it('displays singular form when total is 1', () => {
    const wrapper = mount(RecordCount, {
      props: { total: 1 }
    })
    expect(wrapper.text()).toContain('1')
    expect(wrapper.text()).toContain('record')
    expect(wrapper.text()).not.toContain('records stored')
  })

  it('displays zero count correctly', () => {
    const wrapper = mount(RecordCount, {
      props: { total: 0 }
    })
    expect(wrapper.text()).toContain('0')
    expect(wrapper.text()).toContain('records')
  })
})
