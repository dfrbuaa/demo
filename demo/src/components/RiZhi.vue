<template>
    
        <el-button @click="show('2')" >日志</el-button>
        
        


   
    
</template>

<script>
function $(id){
			return document.getElementById(id);
		}

export default {
  name: 'rizhi',
  data () {
    return {
       
    }
  },
  methods:{
    show(flag){
			if(flag=="2"){
				$("div1").style.display="none";
				$("div2").style.display="block";
                $("div3").style.display="none";
				
			}else{
                $("div1").style.display="block";
				$("div3").style.display="none";
                $("div2").style.display="none";
				
		}
    },
    
    
  }
  
}
</script>

<style scoped> 
    .el-button{
        margin:0px;
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