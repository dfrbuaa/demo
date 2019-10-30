<template>
      <div id="foo" class="block__list block__list_words">
          <div id="hang"  v-for="(item,index) in points" :key="index" >
                <div id="type" style="background:#8CC1F9" v-if="item.TYPE=='1'" >
                     {{item.NAME}}&nbsp;
                     <div id="del" class="chi" @click="del('this')" @mouseenter="red('1')" @mouseleave="gray('1')">
                          &times;
                     </div>
                </div>
                 <div id="type" style="background:#C4C2E8" v-if="item.TYPE=='2'"  >
                     {{item.NAME}}&nbsp;
                     <div  class="chi">
                          &times;
                     </div>
                </div>
                <div id="type" style=" background:#E5E5D9" v-if="item.TYPE=='3'"  >
                     {{item.NAME}}&nbsp;
                     <div class="chi">
                          &times;
                     </div>
                </div>
                <div id="type" style="background:#A3D6D8" v-if="item.TYPE=='4'" >
                     {{item.NAME}}&nbsp;
                     <div class="chi">
                          &times;
                     </div>
                </div>
                <div id="type" style="background:#AAAAAA" v-if="item.TYPE=='5'" >
                     {{item.LONGITUDE}}&deg;N/{{item.LATITUDE}}&deg;E&nbsp;
                     <div class="chi">
                          &times;
                     </div>
                </div>
                
          </div>
                 

     </div>
</template>

<script >
import Sortable from './Sortable';
const points=require('./points.json')

function $(id){
			return document.getElementById(id);
		}
     

 
export default {
  
  
  data() {
    return {
     points:points,
     
    
    
    };
  },
  methods:{
       
       red(flag){
            if(flag=='1'){
                 $('del').style.background="red";
            }
       },
       gray(flag){
            if(flag=='1'){
                 $('del').style.background="#c9c9c9";
            }
       },
       del(that){
            
                 document.body.removeChild(that)
            
       }
  },
  
  
  mounted:function(){    
             
               Sortable.create(document.getElementById('foo'), {
               animation: 300, //动画参数
               filter: '.js-remove',
               

               onFilter: function (evt) {
               console.log(evt.item)
               evt.item.parentNode.parentNode.removeChild(evt.item.parentNode);
               },
               onAdd: function (evt) {   //拖拽时候添加有新的节点的时候发生该事件
                    console.log('onAdd.foo:', [evt.item, evt.from]);
               },
               onUpdate: function (evt) {  //拖拽更新节点位置发生该事件
                    console.log('onUpdate.foo:', [evt.item, evt.from]);
               },
               onRemove: function (evt) {   //删除拖拽节点的时候促发该事件
                    console.log('onRemove.foo:', [evt.item, evt.from]);
               },
               onStart: function (evt) {  //开始拖拽出发该函数
                  
               },
               onSort: function (evt) {  //发生排序发生该事件
                    console.log('onSort.foo:', [evt.item, evt.from]);
               },
               onEnd: function (evt) { //拖拽完毕之后发生该事件
                    console.log('onEnd.foo:', [evt.item, evt.from]);
               }
          });

  }
};
</script>
<style scoped>

.sortable-ghost {
               opacity: 1;
               background-color: rgb(235, 252, 5);
               border-radius:8px;
          }

#hang { 
               width:auto;
               height:13px;
               float:left;
               line-height: 13px;
               border-radius:8px;
               border: solid 1.5px  transparent;
            
}
#type {
               width:auto;
               height:13px;
               padding: 0px 2px 0px 5px;
               border-radius:8px;  
               float:left;
               font-size: 8px;
               color:#fff;
              
               text-align: center;
               line-height: 13px;
              
          }

#foo{
              
            width:278px;
            height:74px;
            padding:2px;
            float:left;
           
           

}
.chi{
     opacity: 0.5;
     position: relative;
     top:2px;
     float:right; 
     width:9px;
     height:9px;
     line-height: 9px;
     text-align: center;
     font-size: 9px;
     background:#c9c9c9;
     border-radius:5px; 
     
     padding: 0px;
     margin: 0px;
     
}

</style>