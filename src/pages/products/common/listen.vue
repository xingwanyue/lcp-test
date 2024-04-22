<script lang="ts" setup>
import { reactive } from 'vue';
import _ from 'lodash';
import { saveStorage, getStorage, api, cdn } from '@/utils';

const localePath = useLocalePath();
const state = reactive({
  type: '1',
  list: [] as any,
  listenThenSpeak: [] as any,
  sampleAnswer: [] as any,
  playData: {} as any,
  played: [] as any,
  isPlay: false,
});
state.played = JSON.parse(getStorage('det_listen') || '[]');
const getList = async () => {
  const { data = {} } = await useFetch(`${api}/common/courses`, { server: true }) as any;
  const { listenThenSpeak, sampleAnswer } = data.value;
  state.listenThenSpeak = [...listenThenSpeak];
  state.sampleAnswer = [...sampleAnswer];
  state.list = state.type === '1' ? [...state.listenThenSpeak] : [...state.sampleAnswer];
};
getList();
const selectChange = async () => {
  state.list = state.type === '1' ? [...state.listenThenSpeak] : [...state.sampleAnswer];
};
const getPlayed = (val: any) => {
  return _.find(state.played, { path: val.path }) ? 'list2' : '';
};

const playClick = (val: any) => {
  state.playData = { ...val };
  const audio = document.getElementById('audioFile') as any;
  nextTick(() => {
    audio.play();
    state.isPlay = true;
  });
  if (!_.find(state.played, { path: val.path })) {
    state.played.push(val);
    saveStorage('det_listen', JSON.stringify(state.played), true);
  }
};
const pauseClick = () => {
  // state.playData = {};
  const audio = document.getElementById('audioFile') as any;
  audio.pause();
  state.isPlay = false;
};
const continuePlay = () => {
  state.isPlay = true;
  const audio = document.getElementById('audioFile') as any;
  audio.play();
};
const onAudioEnd = () => {
  state.playData = {};
  state.isPlay = false;
};
</script>
<template>
  <div class="listen-page">
    <div class="listen-head">
      <div class="title">
        <nuxt-link :to="localePath(`/products/guide`)" class="">
          ＜ Speaking practice audio
        </nuxt-link>
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
        :class="`list ${state.playData.path === val.path ? 'list1' : ''} ${getPlayed(val)}`">
        <div class="title">{{ val.name }}</div>
        <el-image :id="`play-img${key}`" :key="key" src="/img/listen/play.svg" class="play-img"
          @click="playClick(val)"></el-image>
        <span v-if="state.playData.path === val.path">
          <el-image v-if="state.isPlay" :key="key" :id="`playing-img${key}`" src="/img/listen/playing.svg"
            class="playing-img"></el-image>
          <el-image v-else :key="`a${key}a`" :id="`playing-img${key}`" src="/img/listen/play.svg"
            class="playing-img-play" @click="continuePlay"></el-image>
        </span>
        <el-image v-if="state.isPlay" :id="`pause-img${key}`" :key="key" src="/img/listen/pause.svg" class="pause-img"
          @click="pauseClick()"></el-image>
      </div>
    </div>
    <audio id="audioFile" :src="`${cdn}/${state.playData.path}`" controls type="audio/wav" class="listen-audio"
      @ended="onAudioEnd"></audio>
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
    @media (max-width: 800px){
      font-size: 14px;
      padding:6px 8px;
    }
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
      .playing-img, .playing-img-play{
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
        font-size: 16px;
      }
    }
    .listen-con{
      max-width: 100%;
      margin-top: 16px;
      .list{
        width: 100%;
        box-sizing: border-box;
        border-bottom:1px solid #E9E9E9;
        padding:8px 20px 8px 12px;
        font-size: 14px;
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
