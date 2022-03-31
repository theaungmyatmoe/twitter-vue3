<template>
  <div>
    {{ user.username }} - {{ full_name }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        first_name: 'Aung',
        last_name: 'Myat Moe',
        age: 19,
        username: 'amm834',
      }
    }
  },
  computed: {
    full_name() {
      return `${this.user.first_name} ${this.user.last_name}`
    }
  }
}
</script>