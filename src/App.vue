<template>
    <div id="app">
        <p>总数 {{total}} </p>
        <HelloWorld v-model="total"/>
        <handInput v-model="total"/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import handInput from './components/handInput.vue'

export default {
    name: 'app',
    data(){
        return{
          total: 0
        }
    },
    components: {
        HelloWorld,
        handInput
    },
    methods: {
     
    }
}
</script>
