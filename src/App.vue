<template>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import UserProfile from "./components/UserProfile.vue";

export default {
  components: {UserProfile}
}
</script>