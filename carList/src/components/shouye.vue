<template>
  <div>
    <div class="header">
      <p>欢迎使用节油大师</p>
    </div>
    <div style="width: 20%">
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel" >
          <div class="panel-heading" role="tab" id="headingOne" style="background: #3B6290;color: white">
            <h4 class="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                项目管理
              </a>
            </h4>
          </div>
          <div id="collapseOne" class="panel-collapse collapse in shouye-back" role="tabpanel" aria-labelledby="headingOne">
            <div class="panel-body">
              <ul>
                <li>车辆信息</li>
                <li>保险和临牌</li>
                <li>车辆运输</li>
                <li>车辆交接</li>
                <li>日常维护</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading" role="tab" id="headingTwo" style="background: #3B6290;color: white">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                车辆管理
              </a>
            </h4>
          </div>
          <div id="collapseTwo" class="panel-collapse collapse shouye-back" role="tabpanel" aria-labelledby="headingTwo">
            <div class="panel-body">
              <ul>
                <li>54</li>
                <li>25</li>
                <li>252</li>
                <li>54</li>
                <li>25</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading" role="tab" id="headingThree" style="background: #3B6290;color: white">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                库存管理
              </a>
            </h4>
          </div>
          <div id="collapseThree" class="panel-collapse collapse shouye-back" role="tabpanel" aria-labelledby="headingThree">
            <div class="panel-body">
              <ul>
                <li>54</li>
                <li>25</li>
                <li>252</li>
                <li>54</li>
                <li>25</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel ">
          <div class="panel-heading" role="tab" id="headingFore" style="background: #3B6290;color: white">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFore" aria-expanded="false" aria-controls="collapseFore">
                信息管理
              </a>
            </h4>
          </div>
          <div id="collapseFore" class="panel-collapse collapse shouye-back" role="tabpanel" aria-labelledby="headingFore">
            <div class="panel-body">
              <ul>
                <li>54</li>
                <li>25</li>
                <li>252</li>
                <li>54</li>
                <li>25</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel ">
          <div class="panel-heading" role="tab" id="headingFive" style="background: #3B6290;color: white">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                系统设置
              </a>
            </h4>
          </div>
          <div id="collapseFive" class="panel-collapse collapse shouye-back" role="tabpanel" aria-labelledby="headingFive">
            <div class="panel-body">
              <ul>
                <li>54</li>
                <li>25</li>
                <li>252</li>
                <li>54</li>
                <li>25</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shouye",
    }
</script>

<style scoped>
  .header{
    background: #3B6290;
    height:100px;
  }
  .header p{
    color: white;
    font-size: 28px;
    line-height: 100px;
    margin-left: 5%;
    font-style: oblique;
  }
  .shouye-back{
    background: #F2F2F1
  }
  ul{
    list-style: none;
  }
  ul > li{
    border-bottom:1px dashed gray;
    width: 60%;
    margin: 10px 0;
  }
</style>
