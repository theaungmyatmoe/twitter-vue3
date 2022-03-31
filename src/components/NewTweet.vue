<template>
  <!--             New tweet-->
  <div class="card mt-3">
    <div class="card-header">
      New Tweet
      ( {{ tweetCount }}/160)
    </div>
    <div class="card-body">
      <form @submit.prevent="postTweet">
        <div class="mb-3">
          <label for="newTweet" class="form-label fw-bold"
          >Tweet</label>
          <textarea id="newTweet" rows="4" class="form-control"
                    v-model="tweet.content"
                    :class="{'is-invalid' : tweetCount > 160}"
          ></textarea>
        </div>
        <div class="mb-3">
          <select class="form-select" v-model="tweet.tweetType">
            <option
                :value="option.value"
                v-for="(option,index) in tweetTypes"
                :key="index"
            > {{ option.name }}
            </option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary w-100  ">Tweet</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewTweet",
  props: {
    user: {type: Object, required: true},
  },
  data() {
    return {
      tweet: {
        content: '',
        tweetType: 'instant'
      },
      tweetTypes: [
        {value: 'draft', name: 'Draft'},
        {value: 'instant', name: 'Instant Tweet'},
      ],
    }
  },
  methods: {
    postTweet() {
      if (this.tweet && this.tweet.tweetType !== 'draft') {
        this.$emit('new-tweet', this.tweet)
        this.tweet.content = ''
      }
    },
  },
  computed: {
    tweetCount() {
      return this.tweet.content.length;
    }
  }
}
</script>

<style scoped>

</style>