<template>
    <div>
        <h1>asd {{name}}</h1>
        <new-counter></new-counter>
        <new-counter></new-counter>
        <new-counter></new-counter>
    </div>
</template>

<script>
    import NewCounter from './components/newCounter'

    export default {
        data() {
            return {
                name: 'appsss'
            }
        },
        components: {
            NewCounter
        }
    }
</script>

<style>
</style>
