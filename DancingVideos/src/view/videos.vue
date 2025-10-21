<template>
  <div class="common-layout">
    <el-container>
      <el-header class="layout-header">
        <div>LOGO</div>
        <div class="search">
          <el-input class="search-input" placeholder="请输入歌名"></el-input>
          <el-button class="search-button">搜索</el-button>
        </div>
        <div class="icon">
          <svg t="1761055145271" class="icon-item" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="24961" width="48" height="48">
            <path d="M20.48 20.48h983.04v983.04H20.48z" fill="#FFFFFF" p-id="24962"></path>
            <path
              d="M816.04608 326.20544v302.53056h-117.1456a99.7376 99.7376 0 1 0 0 199.43424h76.92288a101.70368 101.70368 0 0 0 101.66272-101.70368V132.34176a34.816 34.816 0 0 0-42.92608-33.83296L349.88032 214.8352a34.816 34.816 0 0 0-26.66496 33.83296v153.8048a30.55616 30.55616 0 0 0 0 3.11296v301.99808H225.6896a99.7376 99.7376 0 0 0 0 199.4752h57.22112a101.70368 101.70368 0 0 0 101.66272-101.70368v-6.88128-370.11456L775.12704 335.872V272.75264L384.6144 365.19936V269.68064l431.39072-103.54688V326.20544z m-117.1456 363.97056h117.1456V726.46656c0 22.24128-18.0224 40.26368-40.22272 40.26368h-76.88192a38.2976 38.2976 0 0 1 0-76.5952zM187.51488 807.3216c0-21.13536 17.16224-38.2976 38.2976-38.2976H323.1744v36.33152c0 22.24128-18.0224 40.26368-40.22272 40.26368H225.77152a38.2976 38.2976 0 0 1-38.2976-38.2976z"
              fill="#000000" p-id="24963"></path>
          </svg>
          <svg t="1761054098640" class="icon-item" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="6103" width="48" height="48">
            <path
              d="M527.36 102.4a424.96 424.96 0 1 0 424.96 424.96A424.96 424.96 0 0 0 527.36 102.4z m0 212.48a84.992 84.992 0 1 1-84.992 84.992 84.992 84.992 0 0 1 84.992-84.992z m194.56 424.96H332.288c-6.144 0-17.92-14.336-17.408-21.504a197.632 197.632 0 0 1 211.968-190.976c113.152 0 204.8 60.928 212.992 190.976a17.92 17.92 0 0 1-17.92 21.504z"
              p-id="6104" fill="#2c2c2c"></path>
          </svg>
        </div>
      </el-header>
      <el-container>
        <el-aside class="layout-aside ">
          <div class="aside">
            <div class="filter-section">
              <el-date-picker-panel class="aside-data" v-model="value" />
            </div>
            <!-- 舞种 -->
            <div class="filter-section">
              <div class="filter-title">舞种</div>
              <div>
                <el-checkbox v-model="checked1" label="Jazz" size="large" />
                <el-checkbox v-model="checked2" label="hiphop" size="large" />
              </div>
            </div>
            <!-- 难度 -->
            <div class="filter-section">
              <div class="filter-title">难度</div>
              <div>
                <el-checkbox v-model="checked1" label="基本功" size="large" />
                <el-checkbox v-model="checked2" label="初级" size="large" />
              </div>
            </div>
            <!-- 老师 -->
            <div class="filter-section">
              <div class="filter-title">老师</div>
              <div>
                <el-checkbox v-model="checked1" label="xxx" size="large" />
                <el-checkbox v-model="checked2" label="xxx" size="large" />
              </div>
            </div>
          </div>
        </el-aside>
        <el-main class="layout-main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .layout-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    .search {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 400px;

      .search-input {
        flex: 1;
      }

      .search-button {
        background-color: black;
        color: white;
      }
    }

    .icon {
      display: flex;
      align-items: center;
      gap: 20px;

      .icon-item {
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .layout-aside {
    width: 355px;
    background-color: #fafafa;
    border-right: 1px solid #ddd;
    padding: 15px;

    .aside {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .aside-data {
        width: 100%;
        display: flex;
        border-radius: 8px;
        overflow-x: auto;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
      }

      .filter-section {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .filter-title {
          font-weight: 600;
          color: #333;
          font-size: 16px;
          margin-bottom: 4px;
        }

        .el-checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
      }
    }
  }
}

.layout-main {

  flex: 1;
  /*自动撑满中间剩余空间*/
}
</style>