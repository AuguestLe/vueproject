<template>
  <input class="form-control mt-3" type="text" :value="value" @input="updateValue" placeholder="请输入。。">
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

