<script lang="ts" setup>
import { reactive } from 'vue';
import find from 'lodash/find';
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
  const { data } = await useFetch(`${api}/common/courses`, {
    server: false,
    lazy: true,
    transform: (data: any) => {
      const { listenThenSpeak, sampleAnswer } = data;
      state.listenThenSpeak = [...listenThenSpeak];
      state.sampleAnswer = [...sampleAnswer];
      state.list = state.type === '1' ? [...state.listenThenSpeak] : [...state.sampleAnswer];
    },
  });
};
getList();
const selectChange = async () => {
  state.list = state.type === '1' ? [...state.listenThenSpeak] : [...state.sampleAnswer];
};
const getPlayed = (val: any) => {
  return find(state.played, { path: val.path }) ? 'list2' : '';
};

const playClick = (val: any) => {
  state.playData = { ...val };
  const audio = document.getElementById('audioFile') as any;
  nextTick(() => {
    audio.play();
    state.isPlay = true;
  });
  if (!find(state.played, { path: val.path })) {
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
        <nuxt-link :to="localePath(`/courses`)" class=""> ＜ {{ $t('listen.Speaking_practice_audio') }} </nuxt-link>
      </div>
      <div>
        <el-radio-group v-model="state.type" size="large" @change="selectChange">
          <el-radio-button label="Listen then speak" value="1" />
          <el-radio-button label="Sample answer" value="2" />
        </el-radio-group>
      </div>
    </div>
    <div class="listen-con">
      <div
        v-for="(val, key) in state.list"
        :key="key"
        :class="`list ${state.playData.path === val.path ? 'list1' : ''} ${getPlayed(val)}`"
      >
        <div class="title">{{ val.name }}</div>
        <el-image
          :id="`play-img${key}`"
          :key="key"
          src="/img/listen/play.svg"
          class="play-img"
          :alt="$t('listen.alt')"
          @click="playClick(val)"
        ></el-image>
        <span v-if="state.playData.path === val.path">
          <div v-if="state.isPlay" class="playing-content">
            <div class="playing-rolling">
              <el-image
                :key="key"
                :id="`playing-img${key}`"
                src="/img/listen/playing.svg"
                class="playing-img"
                :alt="$t('listen.alt')"
              ></el-image>
              <el-image
                :key="`${key}a`"
                :id="`playing-img${key}a`"
                src="/img/listen/playing.svg"
                class="playing-img"
                :alt="$t('listen.alt')"
                style="margin-left: 2px"
              ></el-image>
            </div>
          </div>
          <el-image
            v-else
            :key="`a${key}a`"
            :id="`playing-img${key}`"
            src="/img/listen/play.svg"
            class="playing-img-play"
            :alt="$t('listen.alt')"
            @click="continuePlay"
          ></el-image>
        </span>
        <el-image
          v-if="state.isPlay"
          :id="`pause-img${key}`"
          :key="key"
          src="/img/listen/pause.svg"
          class="pause-img"
          :alt="$t('listen.alt')"
          @click="pauseClick()"
        ></el-image>
      </div>
    </div>
    <audio
      id="audioFile"
      :src="`${cdn}/${state.playData.path}`"
      controls
      type="audio/wav"
      class="listen-audio"
      @ended="onAudioEnd"
    ></audio>
  </div>
</template>
<style lang="scss">
.listen-page {
  .el-radio-button {
    --el-radio-button-checked-bg-color: #fff;
    --el-radio-button-checked-text-color: #f66442;
    --el-radio-button-checked-border-color: #f66442;
  }
  .el-radio-button__inner {
    font-size: 18px;
    color: #403f3e;
    @media (max-width: 800px) {
      font-size: 14px;
      padding: 6px 8px;
    }
    &:hover {
      color: #f66442;
    }
  }
}
</style>
<style lang="scss" scoped>
.listen-page {
  // rolling
  .playing-content {
    width: 24px;
    height: 24px;
    overflow: hidden;
    .playing-rolling {
      display: flex;
      width: 48px;
      height: 24px;
      animation-name: moveto;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
  @keyframes moveto {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
}
</style>
<style lang="scss" scoped>
.listen-page {
  max-width: 1200px;
  padding: 40px 30px;
  margin: auto;
  box-sizing: border-box;
  .listen-head {
    display: flex;
    justify-content: space-between;
    .title {
      font-weight: 500;
      font-size: 20px;
      color: #201515;
    }
  }
  .listen-con {
    max-width: 1200px;
    margin: auto;
    margin-top: 33px;
    border-top: 1px solid #e9e9e9;
    .list {
      width: 100%;
      box-sizing: border-box;
      border-bottom: 1px solid #e9e9e9;
      padding: 16px 78px 16px 24px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      color: #403f3e;
      font-size: 16px;
      line-height: 24px;
      &:hover {
        background: #f2f4f6;
        .play-img {
          display: block;
        }
      }
      .play-img,
      .pause-img {
        width: 24px;
        height: 24px;
        display: none;
      }
      .playing-img,
      .playing-img-play {
        width: 24px;
        height: 24px;
        display: block;
      }
    }
    .list1 {
      color: #f66442 !important;
      &:hover {
        background: #fff;
        .pause-img {
          display: block;
        }
        .play-img,
        .playing-img {
          display: none;
        }
      }
    }
    .list2 {
      color: rgba(64, 63, 62, 0.65);
    }
  }
  .listen-audio {
    display: none;
  }
}
@media (max-width: 800px) {
  .listen-page {
    max-width: 100%;
    padding: 20px 15px;
    margin: auto;
    box-sizing: border-box;
    .listen-head {
      display: block;
      .title {
        margin-bottom: 24px;
        font-size: 16px;
      }
    }
    .listen-con {
      max-width: 100%;
      margin-top: 16px;
      .list {
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #e9e9e9;
        padding: 8px 20px 8px 12px;
        font-size: 14px;
        .play-img {
          display: block !important;
        }
      }
      .list1 {
        .pause-img,
        .play-img {
          display: none !important;
        }
        .playing-img {
          display: block !important;
        }
      }
    }
  }
}
</style>
