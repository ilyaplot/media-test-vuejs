import Vue from 'vue';
import App from './App.vue';
window._ = require('lodash');

import {store} from './store/';
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
