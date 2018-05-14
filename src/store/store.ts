import Vue from 'vue'
import Vuex from 'vuex'
import { ActionTree } from 'vuex';
import { smartvotes_ruleset } from "steem-smartvotes";

import { State } from "./State";

Vue.use(Vuex);

export const state = {
    voterUsername: '' as string,
    delegatorUsername: '' as string,
    voterExists: false,
    delegatorExists: false,
    rulesets: [] as smartvotes_ruleset []
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    setVoterUsername (state: State, voterUsername: string) {
        state.voterUsername = voterUsername;
    },
    setDelegatorUsername (state: State, delegatorUsername: string) {
        state.delegatorUsername = delegatorUsername;
    }
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions: ActionTree<State, State> = {
    setVoterUsername: ({ commit, dispatch, state }, voterUsername: string): void => {
        commit('setVoterUsername', voterUsername);
        if(state.delegatorUsername.length > 0 && state.voterUsername.length > 0) dispatch('scheduleCheckIfUsernamesExist');
    },
    setDelegatorUsername: ({ commit, dispatch, state }, delegatorUsername: string): void => {
        commit('setDelegatorUsername', delegatorUsername);
        if(state.delegatorUsername.length > 0 && state.voterUsername.length > 0) dispatch('scheduleCheckIfUsernamesExist');
    },
    scheduleCheckIfUsernamesExist: ({ commit, dispatch, state }, delegatorUsername: string): void => {
        console.log("Scheduling check...");
    }
  /*increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }*/
};

// getters are functions
const getters = {
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store<State>({
  state,
  getters,
  actions,
  mutations
});