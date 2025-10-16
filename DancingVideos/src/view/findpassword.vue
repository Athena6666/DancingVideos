<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const phonenumber = ref('')
const captcha = ref('')
const onSubmit = () => {

}
const password1 = ref('')
const password2 = ref('')

const backToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="login">
    <el-card class="card">
      <template #header>
        <div class="card-header">
          <div>找回密码</div>
        </div>
      </template>
      <el-form>
        <el-form-item prop="phonenumber">
          <el-input v-model="phonenumber" placeholder="手机号码"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="yanzhenma">
            <el-input class="input" v-model="captcha" placeholder="验证码"></el-input>
            <el-button class="button" type="warning">发送</el-button>
          </div>
        </el-form-item>

        <!-- <el-form-item prop="password1">
          <el-input v-model="password1" placeholder="新密码" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="password2">
          <el-input v-model="password2" placeholder="再次输入" type="password"></el-input>
        </el-form-item> -->

        <el-form-item>
          <div class="card-button">
            <el-button class="button" round @click="onSubmit()">提交</el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="back">
            <el-link type="warning" :underline="false" @click="backToLogin()">返回登录</el-link>
          </div>
        </el-form-item>
      </el-form>
    </el-card>
  </div>

</template>



<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card {
  width: 400px;
  /* ✅ 半透明效果（推荐 rgba + blur） */
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  /* 模糊背景形成磨砂玻璃效果 */
  -webkit-backdrop-filter: blur(10px);
  /* Safari 兼容 */

  /* ✅ 柔和边框（白色微亮 + 半透明） */
  border: 1px solid rgba(255, 255, 255, 0.25);

  /* ✅ 自然阴影（不生硬） */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25),
    inset 0 0 10px rgba(255, 255, 255, 0.05);
  text-align: center;
  color: #fff;
  /* 白色字体在深色背景下更清晰 */
}

.card-header {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #000;
}

.yanzhenma {
  display: flex;
  justify-content: space-between;
  width: 100%;

  .input {
    text-align: left;
    width: 70%;
  }

  .button {
    text-align: right;
    width: 30%;
  }
}

.card-button {
  width: 100%;

  .button {
    width: 100%;
    height: 40px;
    background-color: #000;
    color: #fff;
    border: none;
  }
}

.back {
  width: 100%;
  text-align: center;
}
</style>