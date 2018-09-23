import axios from "axios";

export const state = () => ({
  people: [],

  // ユーザーログイン情報
  authUser: null
})

export const mutations = {
  setPeople(state, people) {
    state.people = people
  },

  // ログイン
  SET_USER(state, data) {
    if (data) {
      state.authUser = data;
    } else {
      state.authUser = null;
    }
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const people = await app.$axios.$get(
      "./random-data.json"
    )
    commit("setPeople", people.slice(0, 10))
  },

  // ログイン
  async login({ commit }, { username, password }) {
    try {
      const res = await axios.post("https://f01api.tk/auth", {
        email: username,
        pass: password
      });

      if ("false" == res.data.result) {
        throw new Error("ログインエラー");
      }
      commit("SET_USER", username);
      this.$router.push('/');
    } catch (error) {
      throw error;
    }
  },

  // ログアウト
  async logout({ commit }) {
    try {
      commit("SET_USER", null);
    } catch (error) {
      throw error;
    }
  }
}
