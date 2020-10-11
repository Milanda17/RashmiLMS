import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router'


require('./bootstrap');

window.Vue = require('vue');


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.router = router

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app-component', require('./views/App.vue').default);

const app = new Vue({
    el: '#app',
    router
});
