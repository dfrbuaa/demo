<template>
    <!-- <button >飞机</button>-->
  <el-popover
    
    placement="right"
    title="标题"
    trigger="manual"
   
    v-model="visible">
    <div>lalalal</div>
    <el-button  slot="reference" @click="visible = !visible">真空速</el-button>
  </el-popover>
</template>
        
   

<script>
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
</script>

<style > 
.el-button--default{
  border-radius:0px;  
  margin-bottom:2px;
  padding:0px;
  border: 0px;
  width:55px;
  height:18px;
  background-color:#000;
  color:#fff;
  font-size:8px;
  float:left;

}

.el-popover--plain{
  width: 80px;
  height:200px;
  padding:5px;
  border: 0px;
  margin:0px;
  font-size:10px;

}
.el-popover__title{
    
  font-size:10px;
  padding:0px;
}

.el-button:focus,.el-button:hover {
  color: #c6e2ff; 
  background-color:#000000;
}


</style>