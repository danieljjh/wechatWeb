<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" fixed-top>
    <a class="navbar-brand" href="#" style="margin-left: 50px;"><em>上海联产电子</em></a>
    <button class="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav shouye-nav">
        <li class="nav-item">
          <a class="nav-link"  href="javascript:;" @click="view(0)">首页 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item ">
          <a class="nav-link"  href="javascript:;" @click="view(1)">XXX</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="javascript:;" @click="view(2)">XXX</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="javascript:;" @click="view(3)">XXX</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "nav",
      data(){
          return {
            type:0
          }
      },
      methods:{
          view(val){
            if(val==0){
              this.type=val;
              this.$router.push("/")

            }
            if(val == 1){
              this.type=val;
              this.$router.push("/about")

            }
            if(val == 2){
              this.type=val;
              this.$router.push("/chan")

            }
            if(val == 3){
              this.type=val;
              this.$router.push("/tel")

            }
          }
      },
      mounted(){
        if(this.$route.path == "/"){
          $(".nav-link").eq(0).addClass("shouye-li-acive").siblings().removeClass("shouye-li-acive");
        }
          if(this.$route.path == "/about"){
            $(".nav-link").eq(1).addClass("shouye-li-acive").siblings().removeClass("shouye-li-acive");
          }
        if(this.$route.path == "/chan"){
          $(".nav-link").eq(2).addClass("shouye-li-acive").siblings().removeClass("shouye-li-acive");
        }
        if(this.$route.path == "/tel"){
          $(".nav-link").eq(3).addClass("shouye-li-acive").siblings().removeClass("shouye-li-acive");
        }


      }
    }
</script>

<style scoped>
  nav{
    /*background-color: gainsboro !important;*/
  }
  nav>a{
    color:black !important;
  }
  .shouye-nav>li{
    margin-left: 90px;
  }
  .shouye-nav>li>a{
    color:black !important;
    font-size: 18px !important;
  }
  .shouye-li-acive{
    display: inline-block;
    /*padding: 5px 20px;*/
    width: 80px;
    transform: skew(-10deg);
    background: #c56a20
  }
</style>
