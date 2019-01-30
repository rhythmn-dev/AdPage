import Vue from 'vue'
import AdPage from '@/components/AdPage'

describe('AdPage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AdPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.adpage h1').textContent)
      .to.equal('Welcome to Your Vue.js PWA')
  })
})
