import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import search from './modules/search'
import filterRules from './modules/filterRules'
import wxinfo from './modules/wxinfo'
import attGlassList from './modules/attrGlassList'
import order from './modules/order'
import remark from './modules/remark'
import comment from './modules/comment'
import userInfo from './modules/userInfo'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: {
      namespaced: true,
      ...user
    },
    search: {
      namespaced: true,
      ...search
    },
    filterRules: {
      namespaced: true,
      ...filterRules
    },
    wxinfo: {
      namespaced: true,
      ...wxinfo
    }, 
    groupGlassList: {
      namespaced: true,
      ...attGlassList
    },
    order: {
      namespaced: true,
      ...order
    },
    remark: {
      namespaced: true,
      ...remark
    },
    comment:{
      namespaced:true,
      ...comment
    },
    userInfo:{
      namespaced:true,
      ...userInfo
    }
  }
});

export default store
