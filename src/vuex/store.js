import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 3
}
// 改变状态机变量的方法
const mutations = {
    add(state, n){
        state.count += n;
    },
    reduce(state){
        state.count--;
    }
}

const getters = {
    count: function (state){
        return state.count += 5;
    }
}

const actions = {
    addAction(context){
        context.commit('add',20),
        setTimeout(() => {context.commit('reduce')}, 3000);
        console.log('我在测试异步');
    },
    reduceAction({commit}){
        commit('reduce');
    }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
}) 