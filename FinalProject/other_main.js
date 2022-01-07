var cart = new Vue({
  el:'#cart',
    data:{
      itemList:[
      {
        id:'1',
        itemName:'青椒',
        imgUrl:'bell-pepper.png',
        price:'30',
        count:'1'
      },
      {
        id:'2',
        itemName:'紅椒',
        imgUrl:'pepper.png',
        price:'30',
        count:'1'
      },
      {
        id:'3',
        itemName:'辣椒',
        imgUrl:'chili.png',
        price:'20',
        count:'1'
      },
      {
        id:'4',
        itemName:'豌豆',
        imgUrl:'green-pea.png',
        price:'35',
        count:'1'
      },
      {
        id:'5',
        itemName:'秋葵',
        imgUrl:'okra.png',
        price:'35',
        count:'1'
      },
      ]
      },
    methods:{
      Plus: function(item){
        item.count++;
      },
      Sub: function(item){
        if(item.count>1){
          item.count--;                
        }
      },
      computed:{
      }
    }
})