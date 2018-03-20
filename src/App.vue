<template>
    <div id="app">
        <inputNumber v-model="value" :max="99" :min="0"></inputNumber>
    </div>
</template>


<script>
import inputNumber from "./components/input-number.vue"
export default {
    name: 'app',
    data(){
        return{
            value: 0
        }
    },
    components: {
        inputNumber
    }
}
</script>
