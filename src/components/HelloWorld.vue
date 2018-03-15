<template>
  <div class="from-group">
    <button @click="handleIncrease" class="btn btn-info mr-3"> +1 </button>
    <button @click="handleReduce" class="btn btn-info"> -1 </button>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props:['counter'],
  data(){
    return {
      counter: this.counter
    }
  },
  methods: {
    handleIncrease: function(){
      console.log(this.counter);
      this.counter++;
      this.$emit('input',this.counter);
    },
    handleReduce: function(){
      this.counter--;
      this.$emit('input',this.counter);
    }
  }
}
</script>
