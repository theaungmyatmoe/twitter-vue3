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
                    v-model="state.tweet.content"
                    :class="{'is-invalid' : tweetCount > 160}"
          ></textarea>
        </div>
        <div class="mb-3">
          <select class="form-select" v-model="state.tweet.tweetType">
            <option
                :value="option.value"
                v-for="(option,index) in state.tweetTypes"
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
import {reactive, computed} from 'vue'

export default {
  name: "NewTweet",
  setup(props, ctx) {
    const state = reactive({
      tweet: {
        content: '',
        tweetType: 'instant'
      },
      tweetTypes: [
        {value: 'draft', name: 'Draft'},
        {value: 'instant', name: 'Instant Tweet'},
      ],
    })
    const tweetCount = computed(() => state.tweet.content.length)

    function postTweet() {
      if (state.tweet && state.tweet.tweetType !== 'draft') {
        ctx.emit('new-tweet', state.tweet)
        state.tweet.content = ''
      }
    }

    return {
      state,
      tweetCount,
      postTweet
    }
  },
}
</script>

<style scoped>

</style>