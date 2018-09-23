<template>
  <div class="container">
    <form @submit.prevent="login">
      <p class="error" v-if="formError">{{ formError }}</p>
      <div class="label-text">name:</div>
      <div><input type="text" v-model="formUsername" name="username"/></div>
      <div class="label-text">password:</div>
      <div><input type="text" v-model="formPassword" name="password"/></div>
      <button type="submit">ログイン</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formError: null,
        formUsername: "demo",
        formPassword: "pass",
      }
    },
    methods: {
      async login() {
        try {
          await this.$store.dispatch('login', {
            username: this.formUsername,
            password: this.formPassword
          });
          this.$router.push('/')
        } catch (e) {
          this.formError = e.message
        }
      },
    }
  }
</script>

<style>
  .label-text, .error {
    color: crimson;
  }
</style>
