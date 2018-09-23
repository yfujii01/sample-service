<template>
  <div>
    <button v-on:click="logout">ログアウト</button>
    <nuxt/>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "nuxt-property-decorator"
  import { State } from "vuex-class"
  // import {Repository} from "../store";

  @Component({})
  export default class extends Vue {
    @State total;

    async logout(){
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }

</script>
