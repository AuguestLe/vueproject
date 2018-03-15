var padDate = function(value){
    return value < 10 ? '0' + value : value;
}
var app = new Vue({
    el:'#app',
    data: {
        list: [
            {
                id: 1 ,
                name :'iPhone 7 ',
                price: 6188 ,
                count: 1 
            },
            {
                id: 2 ,
                name :'iPad Pro',
                price: 5888 ,
                count: 1
            },
            {
                id: 3 ,
                name :'MacBook Pro ',
                price: 21488 ,
                count: 1
            }
        ],
        selectArr:[],
        message:''
    },
    computed: {
        totalPrice: function() {
            var total = 0;
            for (var i = 0;i< this.list.length; i++){
                var item = this.list[i];
                total += item.price * item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods: {
        handleReduce: function(index){
            if(this.list[index].count ===1) return;
            this.list[index].count--;
        },
        handleAdd: function(index){
            this.list[index].count++;
        },
        handleRemove: function(index){
            this.list.splice(index,1);
        },
        handleInput: function(e){
            this.message=e.target.value;
        },
        selectAll: function(e){
            var _this = this;
            if(!e.currentTarget.checked){
                this.selectArr = [];
            }else{
                _this.selectArr=[];
                _this.list.forEach((item,i) => {
                    _this.selectArr.push(i);
                });
            }
        }
    }
});
