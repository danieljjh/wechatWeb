<template>

  <div>
    <!--导航栏-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
      <a class="navbar-brand" href="#" style="margin-left: 50px;"><em>上海联产电子</em></a>
      <button class="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav shouye-nav">
          <li class="nav-item">
            <a class="nav-link" :id="type==0?'shouye-li-acive':''" href="javascript:;" @mouseover="view(0)">首页 <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" :id="type==1?'shouye-li-acive':''" href="javascript:;" @mouseover="view(1)">XXX</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :id="type==2?'shouye-li-acive':''" href="javascript:;" @mouseover="view(2)">XXX</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :id="type==3?'shouye-li-acive':''" href="javascript:;" @mouseover="view(3)">XXX</a>
          </li>
        </ul>
      </div>
    </nav>
    <!--轮播图-->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../../static/imagae/12.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../static/imagae/13.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../static/imagae/14.jpg" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../static/imagae/15.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!--选项卡-->
    <div>
      <div class="shouye-div-xuan" id="shouye-div-xuan1" style="height: 200px;background-color: red">

      </div>
      <div class="shouye-div-xuan" style="height: 200px;background-color: yellow" >
      </div>
      <div class="shouye-div-xuan" style="height: 200px;background-color: pink" @mouseover="view(2)">
      </div>
      <div class="shouye-div-xuan" style="height: 200px;background-color: blue">
      </div>
    </div>

    <!--尾部-->
    <footer>
      <div class="shouye-footer">
        <p>
          <a href="">工作机会</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="">订阅虹信</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="">网站地图</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="">隐私条款</a>
        </p>
        <p>电话：028-65786388　传真：028-65786399<br><br>
          四川虹信软件股份有限公司 版权所有　　Copyright © www.rcsit.cn All right reserved.　 　 蜀ICP备13007670号-1
        </p>
      </div>
      <div class="shouye-img">
        <img src="../../static/imagae/2.png">
      </div>
    </footer>
  </div>
</template>

<script>
  import md from "../../README.md"
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      type: 0
    }
  },
  methods: {
    view(val) {
      this.type = val
      $(".shouye-div-xuan").eq(val).show().siblings().hide()
      $(".shouye-div-xuan").eq(val).html(md)
      let xuanDiv = document.getElementsByClassName("shouye-div-xuan")
      // for (let i = 0; i < xuanDiv.length; i++) {
      //   if (i == val) {
      //     xuanDiv[i].style.display = "block"
      //   } else {
      //     xuanDiv[i].style.display = "none"
      //   }
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  #shouye-li-acive{
    display: inline-block;
    /*padding: 5px 20px;*/
    width: 80px;
    transform: skew(-10deg);
    background: #c56a20
  }
  .shouye-div-xuan{
    width: 100%;
  }
  footer
  {
    float: left;
    width:100%;
    background: lightslategrey;
  }
  .shouye-footer{
    float: left;
    width: 68%;
  }
  .shouye-img{
    float: right;
    width: 30%;
  }
  .shouye-img img{
    width: 100%;
  }
  footer p
  {
    color: white;
    font-size: 13px;
  }
  footer p a
  {
    text-decoration: none;
    color: white;
  }
</style>
