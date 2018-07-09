<template>
  <div class="login">
    <div style="height: 80px;"></div>
    <div class="col-md-7">

    </div>
    <div class="col-md-4 login-right">
      <div class=" hello">
        <p style="font-size: 28px;line-height: 80px">欢迎登陆 <small>节油大师</small></p>
      </div>
      <form class="form-horizontal form" >
        <div class="form-group" style="margin-top: 10px ">
          <label for="inputPhone" class="col-sm-2 control-label" style="">Phone</label>
          <div class="col-sm-10" style="width:70%">
            <input type="text" maxlength="11" v-model="form.phone" class="form-control" id="inputPhone" placeholder="请输入你的手机号">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="col-sm-2 control-label" style="">Password</label>
          <div class="col-sm-10" style="width: 70%">
            <input type="password" class="form-control" v-model="form.password"  id="inputPassword" placeholder="请输入你的密码">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label style="">
                <input type="checkbox" v-model="form.checked"> 记住密码
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="primary" class="btn btn-default" @click="onSubmit">登录</button>
          </div>
        </div>
      </form>
    </div>
    <div class="col-md-1">

    </div>


    <div style="height: 500px;">

    </div>
  </div>
</template>

<script>
  import Cookie from 'js-cookie'
  import axios from "axios"

export default {
  name: 'HelloWorld',
  data () {
    return {
      form:{
        phone: Cookie.get('phone') || '',
        password: Cookie.get('password') || '',
        checked:false
    },
    }
  },
  methods:{
    onSubmit(){
      // const regex=/^1[3|4|5|7|8][0-9]{9}$/;
      // axios.post();
      this.$store.commit('set_token',this.form.phone)
      console.log(this.$store.state.token)
      if (this.form.checked) {
        Cookie.set('phone', this.form.phone, {expires: 5})
        Cookie.set('password', this.form.password, {expires: 5})
      } else {
        Cookie.remove('phone')
        Cookie.remove('password')
      }
      this.$router.push('/shouye')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    background: url("../assets/car.jpg");
  }
  .hello{
    /*text-align: center;*/
    height: 80px;
  }
  .form{
    /*margin: auto;*/
    margin-top:40px;
    width: 400px;
    /*border: 1px solid red;*/
    border-radius: 10px;
  }
  .login-right{
    background: white;
  }
</style>
