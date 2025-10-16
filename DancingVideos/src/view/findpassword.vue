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
        <el-form-item>
          <div class="card-button">
            <el-button style="width: 100%;height: 40px;" type="primary" round @click="onSubmit()">提交</el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="back">
            <el-link type="primary" :underline="false" @click="backToLogin()">返回登录</el-link>
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
}

.card {
  width: 400px
}

.card-header {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
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
}

.back {
  width: 100%;
  text-align: center;
}
</style>