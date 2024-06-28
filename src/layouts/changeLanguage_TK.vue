<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t, setLocale, locale } = useI18n();
import { reactive } from 'vue';

const state = reactive({
  language: '',
  tkshow: false,
});
const wehaveLanguage = {
  ar: 'العربية',
  da: 'Dansk',
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  id: 'Bahasa Indonesia',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  nb: 'Norsk',
  nl: 'Nederlands',
  pl: 'Polski',
  pt: 'Português',
  ru: 'Русский',
  th: 'ไทย',
  tr: 'Türkçe',
  zh: '中文',
};
const changeLanguageTips = {
  ar: {
    tips: 'مرحبًا بك في موقعنا. يمكنك التبديل إلى النسخة [العربية] لفهم واستخدام خدماتنا بشكل أفضل.',
  },
  da: {
    tips: 'Velkommen til vores hjemmeside. Du kan skifte til [Dansk] versionen for at forstå og bruge vores tjenester bedre.',
  },
  de: {
    tips: 'Willkommen auf unserer Website. Sie können auf die [Deutsch] Version wechseln, um unsere Dienste besser zu verstehen und zu nutzen.',
  },
  en: {
    tips: 'Welcome to our website. You can switch to the [English] version to better understand and use our services.',
  },
  es: {
    tips: 'Bienvenido a nuestro sitio web. Puede cambiar a la versión [Español] para comprender y utilizar mejor nuestros servicios.',
  },
  fr: {
    tips: 'Bienvenue sur notre site. Vous pouvez passer à la version [Français] pour mieux comprendre et utiliser nos services.',
  },
  id: {
    tips: 'Selamat datang di situs web kami. Anda dapat beralih ke versi [Bahasa Indonesia] untuk lebih memahami dan menggunakan layanan kami.',
  },
  it: {
    tips: 'Benvenuti nel nostro sito. Puoi passare alla versione [Italiano] per comprendere e utilizzare meglio i nostri servizi.',
  },
  ja: {
    tips: '当社のウェブサイトへようこそ。[日本語]バージョンに切り替えると、サービスをより理解して利用できます。',
  },
  ko: {
    tips: '당사 웹 사이트에 오신 것을 환영합니다. [한국어] 버전으로 전환하여 서비스를 더 잘 이해하고 활용할 수 있습니다.',
  },
  nb: {
    tips: 'Velkommen til nettstedet vårt. Du kan bytte til [Norsk] -versjonen for å forstå og bruke tjenestene våre bedre.',
  },
  nl: {
    tips: 'Welkom op onze website. U kunt overschakelen naar de [Nederlands] versie om onze diensten beter te begrijpen en te gebruiken.',
  },
  pl: {
    tips: 'Witaj na naszej stronie. Możesz przełączyć się na wersję [Polski], aby lepiej zrozumieć i korzystać z naszych usług.',
  },
  pt: {
    tips: 'Bem-vindo ao nosso site. Você pode mudar para a versão [Português] para entender e usar melhor nossos serviços.',
  },
  ru: {
    tips: 'Добро пожаловать на наш сайт. Вы можете переключиться на [Русский] версию, чтобы лучше понимать и использовать наши услуги.',
  },
  th: {
    tips: 'ยินดีต้อนรับสู่เว็บไซต์ของเรา คุณสามารถเปลี่ยนเป็นเวอร์ชั่น [ไทย] เพื่อเข้าใจและใช้บริการของเราได้ดีขึ้น',
  },
  tr: {
    tips: 'Web sitemize hoş geldiniz. Hizmetlerimizi daha iyi anlamak ve kullanmak için [Türkçe] sürümüne geçebilirsiniz.',
  },
  zh: {
    tips: '欢迎访问我们的网站,你可以切换到[中文]版本,以便更好地了解和使用我们的服务。',
  },
};
const changeLanguage = (newVal) => {
  setLocale(newVal);
  state.tkshow = false;
};
const clickClose = () => {
  state.tkshow = false;
  localStorage.setItem('tkclickClose', 'true');
};

if (process.client) {
  state.language = navigator.language.slice(0, 2).toLowerCase() || 'en';
  console.log(navigator.language);
  console.log(wehaveLanguage[state.language]);
  //   如果浏览器语言不是英语 且我们有这个语言 就显示弹框
  if (state.language !== 'en') {
    if (wehaveLanguage[state.language]) {
      state.tkshow = true;
    }
  }
  //   else {
  //     // 否则就自动切换到英语 这块逻辑对用户来说好像不需要
  //     changeLanguage('en');
  //   }
  //   如果浏览器语言跟i18n切换后的的语言一样，取消上面的逻辑,不显示弹框
  if (locale.value === state.language) {
    state.tkshow = false;
  }
  const tkclickClose = localStorage.getItem('tkclickClose');
  if (tkclickClose === 'true') {
    state.tkshow = false;
  }
}
</script>
<template>
  <div v-if="state.tkshow" class="changeLanguage_tk_mc">
    <div class="changeLanguage_tk">
      <div class="header" @click="clickClose">
        <div class="close_icon">X</div>
      </div>
      <div class="language_c_tip">{{ changeLanguageTips[state.language].tips }}</div>
      <div class="btn_out">
        <div class="change_btn" @click="changeLanguage(state.language)">{{ wehaveLanguage[state.language] }}</div>
        <div class="close_btn" @click="clickClose">unset</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.changeLanguage_tk_mc {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  .changeLanguage_tk {
    max-width: 600px;
    border-radius: 10px;
    padding-bottom: 40px;
    @media (max-width: 768px) {
      width: 90%;
    }

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 1100;
    .header {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      .close_icon {
        width: 50px;
        height: 50px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .language_c_tip {
      font-weight: 400;
      font-size: 18px;
      color: #403f3e;
      margin-top: 18px;
      padding: 0 24px;
    }
    .btn_out {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 30px;
      .change_btn {
        padding: 12px 24px;
        background-color: #f66442;
        border-radius: 22px;
        font-weight: 500;
        font-size: 18px;
        color: #ffffff;
        cursor: pointer;
      }
      .close_btn {
        padding: 12px 24px;
        border-radius: 25px;
        font-weight: 500;
        font-size: 18px;
        color: #ffffff;
        cursor: pointer;
        text-align: center;
        box-sizing: border-box;
        border: 1px solid #201515;
        color: #201515;
      }
    }
  }
}
</style>
