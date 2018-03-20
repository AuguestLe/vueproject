<template>
    <div class="action form-inline">
            <div class="form-group mr-2">
                <input type="text" class="form-control" 
                    :value="currentValue"
                    @change="handleChange">
            </div> 
            <button class="btn btn-default mr-2" @click="handleDown" :disabled="currentValue <= min">-</button>
            <button class="btn btn-default" @click="handleUp" :disabled="currentValue >= max">+</button>
        </div>
</template>
<script>
function isNumber (val){
    var reg = /^-?[1-9]\d*$/;
    return reg.test(val+'');
};
export default {
    name:'inputNumber',
    data(){
        return {
            currentValue: this.value
        }
    },
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default:0
        }
    },
    watch: {
        currentValue: function(val){
            this.$emit('input',val);
            this.$emit('on-change',val);
        },
        value: function(val){
            this.updateValue(val);
        }
    },
    methods: {
        handleDown: function(){
            if (this.currentValue <= this.min) return;
            this.currentValue-=1;
        },
        handleUp: function(){
            if(this.currentValue >= this.max) return;
            this.currentValue +=1;
        },
        handleChange: function(e){
            var val = e.target.value.trim();
            var max = this.max;
            var min = this.min;
            if(isNumber(val)){
                val = Number(val);
                this.currentValue = val;
                if(val > max){
                    this.currentValue = max;
                }else if(val < min){
                    this.currentValue = min;
                }
            }else {
                e.target.value = this.currentValue;
            }
        },
        updateValue: function(val){
            if(val > this.max) val = this.max;
            if(val < this.min) val = this.min;
            this.currentValue = val;
        }
    },
    mounted: function() {
        this.updateValue(this.value);
    }
}
</script>

