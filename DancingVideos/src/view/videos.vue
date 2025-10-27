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

        <el-main class="video-list">
          <el-row :gutter="20">
            <el-col v-for="video in videos" :key="video.id" :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <div class="video-card" @click="detail()">
                <!-- 视频缩略图 -->
                <div class="thunbnail">
                  <img :src="video.thumbnail" alt="缩略图" />
                </div>
                <!-- 视频信息 -->
                <div class="video-info">
                  <div class="video-title">{{ video.title }}</div>
                  <div class="video-tags">
                    <el-tag type="success" size="small">{{ video.danceType }}</el-tag>
                    <el-tag type="warning" size="small">{{ video.difficulty }}</el-tag>
                    <el-tag type="info" size="small">{{ video.teacher }}</el-tag>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
    <!-- 悬浮上传按钮 -->
    <div class="upload-float-btn" @click="dialogVisible = true">
      <el-icon size="40">
        <svg t="1761312199133" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="34467" width="64" height="64">
          <path
            d="M551.384615 539.293538V945.230769h-78.76923V539.293538l-107.618462 76.87877-45.784615-64.098462L512 414.365538l192.787692 137.708308-45.784615 64.098462L551.384615 539.293538zM945.230769 551.384615c0 108.760615-88.162462 196.923077-196.923077 196.923077h-118.153846v-78.76923h118.153846a118.153846 118.153846 0 1 0 14.198154-235.460924l-37.632-4.489846 3.032616-37.769846c0.472615-5.848615 0.708923-11.736615 0.708923-17.664 0-119.630769-96.984615-216.615385-216.615385-216.615384a216.694154 216.694154 0 0 0-212.204308 172.898461l-4.804923 23.453539-23.04 6.537846A157.538462 157.538462 0 0 0 315.076923 669.538462h78.769231v78.76923h-78.769231C184.576 748.307692 78.769231 642.500923 78.769231 512c0-98.304 60.553846-184.694154 149.366154-219.805538A295.522462 295.522462 0 0 1 512 78.769231c159.547077 0 289.536 126.483692 295.187692 284.652307A197.021538 197.021538 0 0 1 945.230769 551.384615z"
            fill="#ffffff" p-id="34468"></path>
        </svg>
      </el-icon>
    </div>

    <el-dialog v-model="dialogVisible" title="上传视频" width="600" align-center>
      <div>
        <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          multiple>
          <svg t="1761573717751" class="icon" viewBox="0 0 1264 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="34774" width="64" height="64">
            <path
              d="M992.171444 312.62966C975.189616 137.155482 827.415189 0 647.529412 0 469.849434 0 323.616239 133.860922 303.679205 306.210218 131.598564 333.839271 0 482.688318 0 662.588235c0 199.596576 161.815189 361.411765 361.411765 361.411765h184.014581V692.705882H294.530793l337.939795-361.411764 337.939796 361.411764H726.132229v331.294118H933.647059v-1.555371c185.470975-15.299199 331.294118-170.426291 331.294117-359.856394 0-168.969898-116.101408-310.367302-272.769732-349.958575z"
              p-id="34775" fill="#8a8a8a"></path>
          </svg>
          <div class="el-upload__text">
            选择需要上传的视频 <em>或者拖到这儿</em>
          </div>
        </el-upload>
      </div>
      <div class="upload-info">
        <div class="left-info">
          <div class="info-input">
            <div style="width: 50px;">歌名</div>
            <el-input></el-input>
          </div>
          <div class="info-input">
            <div style="width: 50px;">舞种</div>
            <el-select></el-select>
          </div>
          <div class="info-input">
            <div style="width: 50px;">难度</div>
            <el-select></el-select>
          </div>
          <div class="info-input">
            <div style="width: 50px;">老师</div>
            <el-select></el-select>
          </div>
        </div>
        <div class="right-info">
          <el-input :rows="5" type="textarea" placeholder="描述......">
          </el-input>
          <el-button type="info">提交</el-button>
        </div>
      </div>
      <!-- <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            Confirm
          </el-button>
        </div>
      </template> -->
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const dialogVisible = ref(false)
const videos = ref([
  {
    id: 1,
    title: 'Hiphop 基本功教学',
    thumbnail: 'https://picsum.photos/300/170?random=1',
    danceType: 'Hiphop',
    difficulty: '初级',
    teacher: '张老师'
  },
  {
    id: 2,
    title: 'Jazz 舞蹈进阶技巧',
    thumbnail: 'https://picsum.photos/300/170?random=2',
    danceType: 'Jazz',
    difficulty: '中级',
    teacher: '李老师'
  },
  {
    id: 3,
    title: 'Popping 教学',
    thumbnail: 'https://picsum.photos/300/170?random=3',
    danceType: 'Popping',
    difficulty: '高级',
    teacher: '王老师'
  }
])

const detail = () => {
  router.push('/videodetail')
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

.video-list {
  display: flex;
  padding: 20px;
}

.video-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  /* 让卡片高度自适应 */

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .thumbnail {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
}

.video-info {
  padding: 10px 12px;

  .video-title {
    font-weight: 600;
    font-size: 16px;
    color: #333;
    margin-bottom: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .video-tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }
}

.upload-btn {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1000;

  .el-button {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
  }
}

/* 悬浮按钮样式 */
.upload-float-btn {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #409eff;
  color: white;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
}

.upload-float-btn:hover {
  background-color: #66b1ff;
  transform: scale(1.1);
}

.upload-info {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;

  .left-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;

    .info-input {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  .right-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
  }
}
</style>