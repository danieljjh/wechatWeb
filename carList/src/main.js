// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vueresource from 'vue-resource'
import axios from "axios"
import 'jquery'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'



Vue.use(GridInstaller)
Vue.use(DataSourceInstaller);
Vue.use(Vueresource)

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://f2.i568.me/api/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App ,Grid,DataSourceInstaller},
  template: '<App/>'
})
kendo.culture("zh-CN");//中文显示



