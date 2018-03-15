<template>
  <input class="form-control mt-3" type="text" :value="value" @input="updateValue">
</template>
<script>
export default {
  name:'handInput',
  props:['value'],
  methods: {
      updateValue: function(e){
          this.$emit('input',e.target.value);
      }
  }
}
</script>

