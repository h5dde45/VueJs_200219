<template>
    <div class="car">
        <h3>name {{carName}} - {{reverseName}}</h3>
        <h4>year {{carYear}}</h4>
        <button @click="changeName">Change name</button>
        <button @click="changeFunc()">Change from parent</button>
        <button @click="updateCounter">Update counter</button>
    </div>
</template>
<script>
    import {eventEmitter} from '../../main'

    export default {
        props: {
            carName: {
                type: String,
                required: true
            },
            carYear: Number,
            changeFunc: Function,
        },
        data() {
            return {}
        },
        computed: {
            reverseName() {
                return this.carName.split('').reverse().join('')
            }
        },
        methods: {
            changeName() {
                this.carName = 'abc'
                this.$emit('nameChange', this.carName)
            },
            updateCounter() {
                // this.$emit('counterUpdated', this.counter+1)
                eventEmitter.$emit('counterUpdated', 4)
            }
        }
    }
</script>
<style>
    .car {
        border: 1px solid darkred;
        padding: 10px;
    }
</style>