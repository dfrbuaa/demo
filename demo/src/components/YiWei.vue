<template>
    
        <el-button @click="show('3')" >一维</el-button>
        
        


   
    
</template>

<script>
function $(id){
			return document.getElementById(id);
		}

export default {
  name: 'yiwei',
  data () {
    return {
       
    }
  },
  methods:{
    show(flag){
			if(flag=="3"){
				$("div1").style.display="none";
				$("div2").style.display="none";
				$("div3").style.display="block";
                
				
			}else{
				$("div1").style.display="block";
                $("div2").style.display="none";
				$("div3").style.display="none";
				
		}
    },
    
    
  }
  
}
</script>
<style scoped> 
    .el-button{
        margin-right:85px;
        padding:0px;
        border: 0px;
        width:30px;
        height:24px;
        background-color:#000;
        color:#fff;
        font-size:8px;
        float:right;
        

    
    }
    .el-button:focus,.el-button:hover {
    color: #ffffff; 
  
    background-color:#696969;
}
        
</style>