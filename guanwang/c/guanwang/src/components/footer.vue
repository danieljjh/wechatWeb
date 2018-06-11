<template>
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
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
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
