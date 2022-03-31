<template>
  <main>
    <NavBar/>
    <section>
      <div class="card" v-for="(user,index) in users" :key="index">
        <router-link :to="{
          name:'profile',
          params:{
            userId:user.id
          }
        }"
        >
          <div class="card-body">
            @{{ user.username }}
          </div>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from './NavBar.vue'
import {users as people} from '../assets/users'
import {reactive} from 'vue'

export default {
  name: "Home",
  components: {NavBar},
  setup() {
    const users = reactive(people)
    return {
      users
    }
  }
}
</script>
>