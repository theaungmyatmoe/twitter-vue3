<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary text-light">
    <div class="container">
      <a class="navbar-brand text-light" href="#">Tweeter</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!--            <li class="nav-item">-->
          <!--              <a class="nav-link active" aria-current="page" href="#">Home</a>-->
          <!--            </li>-->
        </ul>
        <div class="d-flex">
          <h5 class="fw-bold font-monospace"> @{{ user.username }}</h5>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>