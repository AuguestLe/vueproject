<template>
    <div id="app">
        <HelloWorld :books="books">
            <template slot="book" scope="props">
                <li>{{props.bookName}}</li>
            </template>
        </HelloWorld>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'app',
    data(){
        return{
            books: [
                {name:'《vue.js实战》'},
                {name:'《JavaScript 语言精粹》'},
                {name:'《JavaScript 高级程序设计'}
            ]
        }
    },
    components: {
        HelloWorld
    },
    methods: {
     
    }
}
</script>
