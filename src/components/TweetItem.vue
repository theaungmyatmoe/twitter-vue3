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
  }
}
</script>

<template>
  <div class="card my-3" >
    <div class="card-header">
      @{{ username }}
    </div>
    <div class="card-body">
      {{ tweet.content }}
    </div>
  </div>
</template>


