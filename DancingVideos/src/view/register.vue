<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  username: '',
  password1: '',
  password2: '',
  phonenumber: ''
})

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
          <div>注册</div>
        </div>
      </template>
      <el-form :model="form" ref="ruleFormRef">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password1">
          <el-input v-model="form.password1" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="password2">
          <el-input v-model="form.password2" placeholder="再次输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="phonenumber">
          <el-input v-model="form.phonenumber" placeholder="手机号码"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="card-button">
            <el-button style="width: 100%;height: 40px;" type="primary" round
              @click="onSubmit(ruleFormRef)">提交</el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="back">
            <el-link type="warning" :underline="false" @click="backToLogin()">已有账号，返回登录</el-link>
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

.card-tips {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .left {
    text-align: left;
  }

  .right {
    text-align: right;
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