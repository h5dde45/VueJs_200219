new Vue({
    el: '#app',
    data: {
        name: 'asd222'
    },
    methods: {
        changeName(event) {
            this.name = event.target.value
        }
    }
})