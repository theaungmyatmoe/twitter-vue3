<script>
import TweetItem from "./TweetItem.vue";

export default {
  name: 'UserProfile',
  components: {TweetItem},
  data() {
    return {
      followers: 0,
      user: {
        first_name: 'Aung',
        last_name: 'Myat Moe',
        age: 19,
        username: 'amm834',
        isAdmin: true,
        tweets: [
          {id: 1, content: 'Content one'},
          {id: 2, content: 'Content two'},
        ]
      }
    }
  },
  mounted() {
    this.followUser()
  },
  methods: {
    followUser() {
      this.followers++
    },
    toggleFavorite(id) {
      console.log(`I liked #${id}`)
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


<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="display-6 fw-bold">@{{ user.username }}</h3>
            <span v-if="user.isAdmin" class="badge bg-success"> Admin </span>
            <span class="badge bg-primary ms-3">{{ followers }} Followers</span>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <TweetItem
            v-for="(tweet,index) in user.tweets"
            :key="index"
            :username="user.username"
            :tweet="tweet"
            @favorite="toggleFavorite"
        />
      </div>
    </div>
  </div>
</template>
