<template>

  <div>
    <!--导航栏-->

    <!--轮播图-->


    <!--选项卡-->
    <div>
      <div class="shouye-div-xuan" style="height: 200px;background-color: red">
      </div>
      <div class="shouye-div-xuan" style="height: 200px;background-color: yellow" >
      </div>
      <div class="shouye-div-xuan" style="height: 200px;background-color: pink" @mouseover="view(2)">
      </div>
      <div class="shouye-div-xuan" style="height: 200px;background-color: blue">
      </div>
    </div>

    <!--尾部-->

  </div>
</template>

<script>
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

  .shouye-div-xuan{
    width: 100%;
  }

</style>
