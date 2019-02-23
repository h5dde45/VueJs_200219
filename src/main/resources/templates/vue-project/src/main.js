import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './63/App.vue'
import router from './63/routes'

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
