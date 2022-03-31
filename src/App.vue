<template>
  <div>
    <p> {{ user.username }} - {{ full_name }} </p>
    <p><strong> Followers : </strong> {{ followers }} </p>
    <p>
      <button @click="followUser">Follow</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      followers: 0,
      user: {
        first_name: 'Aung',
        last_name: 'Myat Moe',
        age: 19,
        username: 'amm834',
      }
    }
  },
  mounted() {
    this.followUser()
  },
  methods: {
    followUser() {
      this.followers++
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (newFollowerCount > oldFollowerCount) {
        console.log('You gained a follower!')
      }
    },
  },
  computed: {
    full_name() {
      return `${this.user.first_name} ${this.user.last_name}`
    }
  },

}
</script>