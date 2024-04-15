<script lang="ts" setup>
import { reactive, computed, onMounted } from 'vue';
import _ from 'lodash';
import { useRouter, useRoute } from 'vue-router';
import playImg from '@/public/img/listen/play.svg';
import playingImg from '@/public/img/listen/playing.svg';
import pauseImg from '@/public/img/listen/pause.svg';

const router = useRouter();
const route = useRoute();
const state = reactive({
  type: '1',
  list: [
    { id: '1', name: 'listen-then-speak-question-1', filePath: '' },
    { id: '2', name: 'listen-then-speak-question-2', filePath: '' },
    { id: '3', name: 'listen-then-speak-question-3', filePath: '' },
    { id: '4', name: 'listen-then-speak-question-4', filePath: '' },
  ] as any,
  playData: {} as any,
  played: [] as any,
});
onMounted(() => {
  state.played = JSON.parse(localStorage.getItem('det_listen') || '[]');
});
const selectChange = async () => { };
const listClick = async (val: any) => {
  state.playData = { ...val };
  if (!_.find(state.played, { id: val.id })) {
    state.played.push(val);
    localStorage.setItem('det_listen', JSON.stringify(state.played));
  }
};
const getPlayed = (val: any) => {
  return _.find(state.played, { id: val.id }) ? 'list2' : '';
};
const pauseClick = (val: any) => { };
const playClick = (val: any) => { };
</script>
<template>
  <div class="listen-page">
    <div class="listen-head">
      <div class="title">
        ＜ Speaking practice audio
        <!-- <nuxt-link :to="localePath(``)" class="">
          ＜ Speaking practice audio
        </nuxt-link> -->
      </div>
      <div>
        <el-radio-group v-model="state.type" size="large" @change="selectChange">
          <el-radio-button label="Listen then speak" value="1" />
          <el-radio-button label="Sample answer" value="2" />
        </el-radio-group>
      </div>
    </div>
    <div class="listen-con">
      <div v-for="(val, key) in state.list" :key="key"
        :class="`list ${state.playData.id === val.id ? 'list1' : ''} ${getPlayed(val)}`" @click="listClick(val)">
        <div class="title">{{ val.name }}</div>
        <el-image :id="`play-img${key}`" :key="key" :src="playImg" class="play-img" @click="playClick(val)"></el-image>
        <el-image v-if="state.playData.id === val.id" :key="key" :id="`playing-img${key}`" :src="playingImg"
          class="playing-img"></el-image>
        <el-image :id="`pause-img${key}`" :key="key" :src="pauseImg" class="pause-img"
          @click="pauseClick(val)"></el-image>
      </div>
    </div>
    <audio :src="state.playData.filePath" controls type="audio/wav" class="listen-audio"></audio>
  </div>
</template>
<style lang="scss">
.listen-page{
  .el-radio-button{
    --el-radio-button-checked-bg-color: #fff;
    --el-radio-button-checked-text-color: #F66442;
    --el-radio-button-checked-border-color: #F66442;
  }
  .el-radio-button__inner{
    font-size: 18px;
    color: #403F3E;
    &:hover{
      color: #F66442;
    }
  }
}
</style>
<style lang="scss" scoped>
.listen-page{
  max-width: 1200px;
  padding: 40px 30px;
  margin: auto;
  box-sizing: border-box;
  .listen-head{
    display: flex;
    justify-content: space-between;
    .title{
      font-weight: 500;
      font-size: 20px;
      color: #201515;
    }
  }
  .listen-con{
    max-width: 1200px;
    margin: auto;
    margin-top: 33px;
    border-top:1px solid #E9E9E9;
    .list{
      width: 100%;
      box-sizing: border-box;
      border-bottom:1px solid #E9E9E9;
      padding:16px 78px 16px 24px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      color: #403F3E;
      font-size: 16px;
      line-height: 24px;
      &:hover{
        background: #F2F4F6;
        .play-img{
          display: block;
        }
      }
      .play-img, .pause-img{
        width: 24px;
        height: 24px;
        display: none;
      }
      .playing-img{
        width: 24px;
        height: 24px;
        display: block;
      }
    }
    .list1{
      color: #F66442 !important;
      &:hover{
        background: #fff;
        .pause-img{
          display: block;
        }
        .play-img, .playing-img{
          display: none;
        }
      }
    }
    .list2{
      color: rgba(64,63,62,0.65);
    }
  }
  .listen-audio{
    display: none;
  }
}
@media (max-width: 800px){
  .listen-page{
    max-width: 100%;
    padding: 20px 15px;
    margin: auto;
    box-sizing: border-box;
    .listen-head{
      display: block;
      .title{
        margin-bottom: 24px;
      }
    }
    .listen-con{
      max-width: 100%;
      margin-top: 16px;
      .list{
        width: 100%;
        box-sizing: border-box;
        border-bottom:1px solid #E9E9E9;
        padding:8px 40px 8px 12px;
        .play-img{
          display: block !important;
        }
      }
      .list1{
        .pause-img, .play-img{
          display: none !important;
        }
        .playing-img{
          display: block !important;
        }
      }
    }
  }
}
</style>
