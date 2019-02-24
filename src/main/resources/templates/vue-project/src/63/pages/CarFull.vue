<template>
    <div>
        <h4>Car name: {{$route.query.name}}</h4>
        <h5>Car year: {{year}}</h5>
        <div class="scroll">        </div>
        <h3 id="scroll">from the bottom</h3>
        <div class="scroll">        </div>

    </div>


</template>
<script>
    export default {
        computed: {
            year() {
                return this.$route.query.year
            }
        }
    }
</script>
<style>
    .scroll{
        width: 100px;
        height: 1000px;
        background: firebrick;
    }
</style>