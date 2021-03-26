import { getAccessorFromStore } from 'typed-vuex'

import { createStore } from '/root/TeamCity/buildAgent/work/d1b81347e707aeef/.nuxt/store'

const storeAccessor = getAccessorFromStore(createStore())

export default async ({ store }, inject) => {
  inject('accessor', storeAccessor(store))
}
