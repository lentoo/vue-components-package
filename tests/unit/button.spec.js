import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/components/button/main.vue'

describe('Button.vue', () => {
  it('create', () => {
    const warpper = shallowMount(Button)
    expect(warpper).to.be.ok
  })
  it('set type', () => {
    const btnTypes = [
      "default",
      "primary",
      "success",
      "info",
      "warning",
      "danger"
    ]
    btnTypes.forEach(type => {
      const warpper = shallowMount(Button, {
        propsData: {
          type
        }
      })
      expect(warpper.vm.$el.classList.contains(`cc-button__${type}`)).to.equal(true)
      // expect(warpper.vm.$el.classList.contains(`cc-button__${type}`).to.equals(true)
    })
  })
  it('set plant', () => {
    const buttom = shallowMount(Button, {
      propsData: {
        plain: true
      }
    })
    expect(buttom.vm.$el.classList.contains('is-plain')).to.be.true
  })
  it('set round', () => {
    const buttom = shallowMount(Button, {
      propsData: {
        round: true
      }
    })
    expect(buttom.vm.$el.classList.contains('is-round')).to.be.true
  })
  it('set depressed', () => {
    const buttom = shallowMount(Button, {
      propsData: {
        depressed: true
      }
    })
    expect(buttom.vm.$el.classList.contains('cc-button__depressed')).to.be.true
  })
  // it('click', () => {
  //   const warpper = shallowMount(Button)
  //   const callback = sinon.fake();
  //   warpper.vm.$on('click', callback)
  // })
})
