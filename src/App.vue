<template>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>

import {useStore} from 'vuex'
import {onMounted} from 'vue'
import {users} from './assets/users.js'

export default {
  name: 'App',
  setup() {
    const store = useStore()
    onMounted(() => {
      const user = users[0]
      store.dispatch('setUser', user)
    })
  }
}
</script>