<template>
    <div>
        <h2>parent {{carName}}</h2>
        <app-counter></app-counter>
        <app-car
                :carName="carName"
                :carYear="carYear"
                @nameChange="carName= $event"
                @counterUpdated="counter=$event"
        ></app-car>
    </div>
</template>

<script>
    import AppCar from './components/Car'
    import AppCounter from './components/Counter'

    export default {
        data() {
            return {
                carName: '1 23 456',
                carYear: 333,
            }
        },
        components: {
            AppCar,
            AppCounter
        },
        methods: {
            changeNameTo() {
                this.carName = 'nmb'
            }
        }
    }
</script>

<style>
</style>
