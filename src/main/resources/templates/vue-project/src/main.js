import Vue from 'vue'
import App from './40/App.vue'
import ColorDirective from './40/directive/color'

Vue.directive('colored', ColorDirective)

new Vue({
    render: h => h(App),
}).$mount('#app')
