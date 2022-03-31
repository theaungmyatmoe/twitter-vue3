<script>
import TweetItem from "./TweetItem.vue";

export default {
  name: 'UserProfile',
  components: {TweetItem},
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
      },
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
    },
    postTweet() {
      if (this.tweet && this.tweet.tweetType !== 'draft') {
        this.user.tweets.unshift({
          ...this.tweet,
          id: this.user.tweets.length + 1,
        })
        this.tweet.content = ''
      }
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
    },
    tweetCount() {
      return this.tweet.content.length;
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
            <!--            Profile info-->
            <div>
              <h3 class="display-6 fw-bold">@{{ user.username }}</h3>
              <span v-if="user.isAdmin" class="badge bg-success"> Admin </span>
              <span class="badge bg-primary ms-3">{{ followers }} Followers</span>
            </div>
          </div>
        </div>

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
