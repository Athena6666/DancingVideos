<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  username: '',
  password: ''
})

const rules = reactive<FormRules>({
  username: [{ required: true, message: "请输入用户名", trigger: 'blur' }],
  password: [{ required: true, message: "请输入密码", trigger: 'blur' }]
})

const ruleFormRef = ref<FormInstance>()
const onSubmit = async (ruleFormRef: FormInstance | undefined) => {
  if (!ruleFormRef) return;
  await ruleFormRef.validate(async (valid) => {
    if (valid) {
      ElMessage({
        type: 'success',
        message: "登录成功"
      })
    } else {
      ElMessage({
        type: 'warning',
        message: "登录失败"
      })
    }
  })
}

const goRegister = () => {
  router.push('/register')
}

const goPassword = () => {
  router.push('/findpassword')
}
</script>

<template>
  <div class="login">
    <el-card class="card">
      <template #header>
        <div class="card-header">
          <div>登录</div>
        </div>
      </template>
      <el-form :model="form" :rules="rules" ref="ruleFormRef">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="card-tips">
            <el-link type="warning" :underline="false" @click="goPassword()">忘记密码</el-link>
            <el-link type="primary" :underline="false" @click="goRegister()">立即注册</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="card-button">
            <el-button style="width: 100%;height: 40px;" type="primary" round
              @click="onSubmit(ruleFormRef)">提交</el-button>
          </div>
        </el-form-item>
      </el-form>
      <template #footer>
        <div>
          <div class="card-text">其他登录方式</div>
          <div class="card-icon">
            <!--qq-->
            <svg class="Zi Zi--QQ Login-socialIcon" fill="#50c8fd" viewBox="0 0 24 24" width="40" height="40">
              <path
                d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z"
                fill-rule="evenodd"></path>
            </svg>
            <!--wx-->
            <svg class="Zi Zi--WeChat Login-socialIcon" fill="#60c84d" viewBox="0 0 24 24" width="40" height="40">
              <path
                d="M2.224 21.667s4.24-1.825 4.788-2.056C15.029 23.141 22 17.714 22 11.898 22 6.984 17.523 3 12 3S2 6.984 2 11.898c0 1.86.64 3.585 1.737 5.013-.274.833-1.513 4.756-1.513 4.756zm5.943-9.707c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272z"
                fill-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      </template>
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

}

.card-button {
  width: 100%;
}

.card-text {
  text-align: center;
  font-size: small;
  color: gray;
}

.card-icon {
  text-align: center;
  padding-top: 10px;
}
</style>