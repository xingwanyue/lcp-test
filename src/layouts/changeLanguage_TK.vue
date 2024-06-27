<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t, setLocale, locale } = useI18n();
import { reactive } from 'vue';

const state = reactive({
  language: '',
  tkshow: false,
});
const wehaveLanguage = {
  de: 'Deutsch',
  pt: 'Português',
  ja: '日本語',
  fr: 'Français',
  id: 'Bahasa Indonesia',
  es: 'Español',
  it: 'Italiano',
  th: 'ไทย',
  pl: 'Polski',
  ko: '한국어',
  ar: 'العربية',
  nl: 'Nederlands',
  tr: 'Türkçe',
  nb: 'Norsk',
  da: 'Dansk',
  ru: 'Русский',
};
const changeLanguageTips = {
  //   de: {
  //     area: 'Deutsch',
  //     tips: '欢迎访问我们的网站，检测到您所在的地区为[Deutsch]。建议切换到[Deutsch]版本,以便更好地了解和使用我们的服务。',
  //   },
  de: {
    area: 'Deutsch',
    tips: 'Willkommen auf unserer Website, wir haben festgestellt, dass Ihre Region [Deutsch] ist. Um unsere Dienste besser zu verstehen und zu nutzen, empfehlen wir Ihnen, auf die [Deutsch]-Version zu wechseln.',
  },
  pt: {
    area: 'Português',
    tips: 'Bem-vindo ao nosso site, detectamos que sua região é [Português]. Recomendamos que você mude para a versão [Português] para entender e usar melhor nossos serviços.',
  },
  ja: {
    area: '日本語',
    tips: '当社のウェブサイトへようこそ。お客様の地域が[日本語]であることが検出されました。サービスをより良く理解し、利用するために、[日本語]バージョンに切り替えることをお勧めします。',
  },
  fr: {
    area: 'Français',
    tips: 'Bienvenue sur notre site Web, nous avons détecté que votre région est [Français]. Nous vous recommandons de passer à la version [Français] pour mieux comprendre et utiliser nos services.',
  },
  id: {
    area: 'Bahasa Indonesia',
    tips: 'Selamat datang di situs web kami, kami mendeteksi bahwa wilayah Anda adalah [Bahasa Indonesia]. Kami sarankan Anda beralih ke versi [Bahasa Indonesia] untuk lebih memahami dan menggunakan layanan kami.',
  },
  es: {
    area: 'Español',
    tips: 'Bienvenido a nuestro sitio web, hemos detectado que su región es [Español]. Le recomendamos que cambie a la versión [Español] para comprender y utilizar mejor nuestros servicios.',
  },
  it: {
    area: 'Italiano',
    tips: 'Benvenuti sul nostro sito web, abbiamo rilevato che la tua regione è [Italiano]. Ti consigliamo di passare alla versione [Italiano] per comprendere e utilizzare meglio i nostri servizi.',
  },
  th: {
    area: 'ไทย',
    tips: 'ยินดีต้อนรับสู่เว็บไซต์ของเรา เราตรวจพบว่าภูมิภาคของคุณคือ [ไทย] เราขอแนะนำให้คุณเปลี่ยนเป็นเวอร์ชัน [ไทย] เพื่อเข้าใจและใช้บริการของเราได้ดียิ่งขึ้น',
  },
  pl: {
    area: 'Polski',
    tips: 'Witaj na naszej stronie internetowej, wykryliśmy, że Twoja lokalizacja to [Polski]. Zalecamy przełączenie się na wersję [Polski], aby lepiej zrozumieć i korzystać z naszych usług.',
  },
  ko: {
    area: '한국어',
    tips: '저희 웹사이트에 오신 것을 환영합니다. 귀하의 지역이 [한국어]임을 감지했습니다. 서비스를 더 잘 이해하고 활용하기 위해 [한국어] 버전으로 전환하는 것을 권장합니다.',
  },
  ar: {
    area: 'العربية',
    tips: 'مرحبًا بك في موقعنا على الويب، لقد اكتشفنا أن منطقتك هي [العربية]. نوصيك بالتبديل إلى الإصدار [العربية] لفهم واستخدام خدماتنا بشكل أفضل.',
  },
  nl: {
    area: 'Nederlands',
    tips: 'Welkom op onze website, we hebben vastgesteld dat uw regio [Nederlands] is. We raden u aan over te schakelen naar de [Nederlands]-versie om onze diensten beter te begrijpen en te gebruiken.',
  },
  tr: {
    area: 'Türkçe',
    tips: 'Web sitemize hoş geldiniz, bölgenizin [Türkçe] olduğunu tespit ettik. Hizmetlerimizi daha iyi anlamak ve kullanmak için [Türkçe] sürümüne geçmenizi öneririz.',
  },
  nb: {
    area: 'Norsk',
    tips: 'Velkommen til nettstedet vårt, vi har oppdaget at regionen din er [Norsk]. Vi anbefaler at du bytter til [Norsk]-versjonen for å forstå og bruke tjenestene våre bedre.',
  },
  da: {
    area: 'Dansk',
    tips: 'Velkommen til vores hjemmeside, vi har opdaget, at din region er [Dansk]. Vi anbefaler, at du skifter til [Dansk]-versionen for bedre at forstå og bruge vores tjenester.',
  },
  ru: {
    area: 'Русский',
    tips: 'Добро пожаловать на наш сайт, мы обнаружили, что ваш регион - [Русский]. Мы рекомендуем перейти на [Русский] версию, чтобы лучше понимать и использовать наши услуги.',
  },
};
const changeLanguage = (newVal) => {
  console.log('切换为英语');
  setLocale(newVal);
  state.tkshow = false;
};
if (process.client) {
  state.language = navigator.language;
  //   如果浏览器语言不是英语，且我们有这个语言 就显示弹框
  if (navigator.language !== 'en') {
    if (wehaveLanguage[navigator.language]) {
      state.tkshow = true;
    }
  } else {
    changeLanguage('en');
  }
  //   如果浏览器语言跟i18n的语言一样，就不显示弹框
  if (locale.value === navigator.language) {
    state.tkshow = false;
  }
}
</script>
<template>
  <div v-if="state.tkshow" class="changeLanguage_tk_mc">
    <div class="changeLanguage_tk">
      <div class="header" @click="state.tkshow = false">
        <div class="close_icon">x</div>
      </div>
      <div class="language_c_tip">{{ changeLanguageTips[state.language].tips }}</div>
      <div class="btn_out">
        <div class="change_btn" @click="changeLanguage(state.language)">{{ wehaveLanguage[state.language] }}</div>
        <div class="close_btn" @click="state.tkshow = false">unset</div>
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

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .language_c_tip {
      font-weight: 400;
      font-size: 18px;
      color: #403f3e;
      margin-top: 24px;
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
