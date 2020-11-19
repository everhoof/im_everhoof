import { getAccessorFromStore } from 'typed-vuex'

import { createStore } from 'C:/Users/intel/Dev/@everhoof/im_everhoof/.nuxt/store'

const storeAccessor = getAccessorFromStore(createStore())

export default async ({ store }, inject) => {
  inject('accessor', storeAccessor(store))
}
