<template>
    <div style="border: 1px solid red; padding: 10px">
        <h2>Counter: {{counter}}</h2>
        <button @click="add">add</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {counter: 0}
        },
        methods:{
            add(){
                this.counter++
            }
        }
    }
</script>