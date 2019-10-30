<template>
  <div id="app">
    <div id="div1">
        <div id="div11" class="div11">
          <FeiJi></FeiJi>
          <ZhenKongsu></ZhenKongsu>
          <Null></Null>
          <Feet></Feet>
        </div>
        <div class="div12">
          
            <HangLu1></HangLu1>
            <div  id="clear" @click="display('1')">清除</div>

          
        </div>
        <div class="div13">
            <ChengXu></ChengXu>
            <FanXiang></FanXiang>
            <LuYou></LuYou>
            <LiChang></LiChang>
        </div>
    </div>
    <div id="div2" class="div2">
      <div id="div21" class="div21">
        <div id="div211" class="div211">开始点&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目的点</div>
        <div id="div212" class="div212">方向</div>
        <div id="div213" class="div213">航路段</div>
        <div id="div214" class="div214">汇总</div>
        <div id="div215" class="div215">剩余</div>
        <div id="div216" class="div216">预计</div>
        
      </div>

    </div>
    
    <div id="div3" class="div3">
      <div id="div31" class="div31">

      </div>
      <div id="div32" class="div32">
        <div id="div321" class="div321">&lt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;航路&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</div>
        <div id="div322" class="div322">
          <p>最高点</p>
          <p>空隙</p>
          <p>首个障碍</p>

        </div>
      </div>
    
    </div>
   
     
     <div class="divBottom">
        <YiWei></YiWei>
        <RiZhi></RiZhi>
        <PeiZhi></PeiZhi>

     </div>
   
  </div>
</template>

<script>


function $(id){
			return document.getElementById(id);
		};
window.onload=function(){
      $("div1").style.display="block";
      $("div2").style.display="none";
			$("div3").style.display="none";
    }; 
  


import FeiJi from './components/FeiJi.vue'
import ZhenKongsu from './components/ZhenKongsu.vue'
import Null from './components/Null.vue'
import Feet from './components/Feet.vue'
import ChengXu from './components/ChengXu.vue'
import LuYou from './components/LuYou.vue'
import FanXiang from './components/FanXiang.vue'
import LiChang from './components/LiChang.vue'
import PeiZhi from './components/PeiZhi.vue'
import RiZhi from './components/RiZhi.vue'
import YiWei from './components/YiWei.vue'
import HangLu1 from './components/HangLu1.vue'


export default {
  name: 'app',
  data () {
    return {

     
    }
  },
  
  
  methods:{
    display(flag){
      if(flag=='1'){
          $("foo").style.display="none";
          $("clear").style.display="none";
          
      }
    }
    
  },
  components:{
    FeiJi,
    ZhenKongsu,
    Null,
    Feet,
    ChengXu,
    FanXiang,
    LuYou,
    LiChang,
    PeiZhi,
    RiZhi,
    YiWei,
    HangLu1
  }

}
</script>

<style>
#app{
  
    
	position:absolute;
  top:0px;
  left: 50%; 
  margin:0px 0px 0px -200px;	
  padding: 0px;
  width:400px;
  height:106px;
  background:#696969;
  border-radius:1px;  

}

.div11{
  
  padding:2px 2px 2px 2px;
  
  border-radius:0px;  

  width:55px;
  height:79px;
  
  float:left;

}
.div12{
  
  
  
  background:#000;
  border-top: 2px solid #696969 ;
  width:282px;
  height:76px;
  padding-top:2px;
  float:left;

}
#clear{
  padding:0px;
  position: absolute;
  top:60px;
  left:300px;
  width:28px;
  height:13px;
  line-height: 13px;
  text-align: center;
  font-size: 8px;
  background: #c5c3c3;
  color:#000;

}

.div13{
  
  padding:2px 2px 2px 2px ;
  
  border-radius:1px;  

  width:55px;
  height:79px;
  
  float:left;

}
.div2{
  
  width:400px;
  height:79px;
  left:0px;
  top:0px;
  
}
.div21{
  position:absolute;
  left:0px;
  top:0px;
  margin-top:1px;
  width:400px;
  height:13px;

  
}

.div211{
  margin-right:1px;
  width:89px;
  height:13px;
  line-height:13px;
  font-size:6px;
  color:#fff;
  background:#000;
  text-align:center;
  float:left;
}
.div212{
  margin-right:1px;
  width:35px;
  height:13px;
  line-height:13px;
  font-size:6px;
  color:#fff;
  background:#000;
  text-align:center;
  float:left;
}
.div213{
  margin-right:1px;
  width:89px;
  height:13px;
  line-height:13px;
  font-size:6px;
  color:#fff;
  background:#000;
  text-align:center;
  float:left;
}
.div214{
  margin-right:1px;
  width:89px;
  height:13px;
  line-height:13px;
  font-size:6px;
  color:#fff;
  background:#000;
  text-align:center;
  float:left;
}
.div215{
  margin-right:1px;
  width:58px;
  height:13px;
  line-height:13px;
  font-size:6px;
  color:#fff;
  background:#000;
  text-align:center;
  float:left;
}
.div216{
  
  width:35px;
  height:13px;
  line-height:13px;
  font-size:6px;
  color:#fff;
  background:#000;
  text-align:center;
  float:left;
}

.div3{
  position:absolute;
  left:0px;
  top:0px;
  width:400px;
  height:81px;
 
}
.div31{
 
  width:315px;
  height:81px;
  float: left;
  


}
.div32{
  
  width:85px;
  height:81px;
 
  float:left;
  


}
.div321{
  margin-bottom: 1px;
  width:85px;
  height:15px;
  line-height: 15px;
  font-size: 8px;
  text-align: center;
  color: #fff;
  background:#000;

}

.div322{
  padding: 3px 5px 3px 5px;
  width:75px;
  height:59px;
  line-height: 59px;
  background:#000;
  float: left;
}
p{
  color: #fff;
  font-size: 6px;
  line-height: 12px;
}


.divBottom{
  position:absolute;
  margin:82px 0px 0px 0px;
  top:0px;
  border-radius:1px;  

  width:400px;
  height:24px;
  background:#000000;
  float:left;

}
</style>
