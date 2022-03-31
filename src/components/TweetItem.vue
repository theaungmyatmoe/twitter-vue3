<script>
export default {
  name: "TweetItem",
  props: {
    username: {
      type: String,
      required: true
    },
    tweet: {
      type: Object,
      required: true
    },
  },
  methods: {
    favoriteTweet(id) {
      this.$emit('favorite', id)
    }
  }
}
</script>

<template>
  <div class="card my-3" @click="favoriteTweet(tweet.id)">
    <div class="card-header">
      @{{ username }}
    </div>
    <div class="card-body">
      {{ tweet.content }}
    </div>
  </div>
</template>


