<template>
  <main>
    <NavBar :user="user"/>
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
              <NewTweet @new-tweet="updateTweets"/>
            </div>
          </div>


        </div>
        <div class="col-md-8">
          <TweetItem
              v-for="(tweet,index) in user.tweets"
              :key="index"
              :username="user.username"
              :tweet="tweet"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import TweetItem from "./TweetItem.vue";
import NavBar from "./NavBar";
import NewTweet from "./NewTweet";
import {reactive, computed, toRefs} from 'vue'
import {useRoute} from 'vue-router'
import {users} from '../assets/users'

export default {
  name: 'UserProfile',
  components: {NewTweet, NavBar, TweetItem},
  setup(props, ctx) {

    const route = useRoute()
    const userId = computed(() => route.params.userId)

    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] ?? users[0]
    })


    function updateTweets(tweet) {
      const newTweet = {
        ...tweet,
        id: state.user.tweets.length + 1
      }
      state.user.tweets.unshift(newTweet)
    }

    const full_name = computed(() => `${this.user.first_name} ${this.user.last_name}`
    )

    return {
      ...toRefs(state),
      updateTweets,
      full_name,
    }
  },
}
</script>
