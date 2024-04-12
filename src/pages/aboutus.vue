<script lang="ts" setup>
import { reactive, computed, onMounted } from 'vue';
import _ from 'lodash';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue'
import bannerAboutus from '@/public/img/aboutus/banner-aboutus.svg';

const router = useRouter();
const route = useRoute();
const rate = ref(0);
const state = reactive({
  list: [] as any,
  details: {} as any,
  checkId: '',
  rate,
  rateArr: [] as any,
});
onMounted(() => {
  state.rateArr = JSON.parse(localStorage.getItem('det_rate') || '[]');
  getList();
});
const getList = async () => {
  state.list = [
    { id: '1', name: 'OverView of Duolingo English Test1', desc: 'Discover over 100 heartfelt Islamic messages for the sick person in this article. Inspire wellness and comfort with these powerful words of encouragement.' },
    { id: '2', name: 'OverView of Duolingo English Test2', desc: 'Discover over 100 heartfelt Islamic messages for the sick person in this article. Inspire wellness and comfort with these powerful words of encouragement.' },
    { id: '3', name: 'OverView of Duolingo English Test3', desc: 'Discover over 100 heartfelt Islamic messages for the sick person in this article. Inspire wellness and comfort with these powerful words of encouragement.' },
  ];
  const { id = '1' } = route.query as any;
  getContent(id);
};
const getContent = async (id: string) => {
  state.checkId = id;
  const temp = _.find(state.list, { id }) || {};
  state.details = { ...temp };
  const { rate } = _.find(state.rateArr, { id: id }) || {};
  state.rate = rate;
};

</script>
<template>
  <div class="aboutus">
    <div class="learn_hader" :style="`background-image: url(${bannerAboutus});`">
      <div class="learn_hader_content">
        <div class="title">About DET Pratice</div>
      </div>
    </div>
    <div class="content padding">
      <div class="title">Our Esteemed Language Education Team</div>
      <div class="content1">
        At the heart of our language education services lies a team of dedicated, highly qualified, and experienced
        educators, each bringing their own unique expertise and passion to the forefront of language learning. Our team
        is comprised of elite professionals who are not only proficient in English but also experts in preparing
        students for major English proficiency tests like the TOEFL, IELTS, and Duolingo English Test (DET).
        Our educators hold prestigious certifications such as TESOL, and Cambridge English Teacher Training
        certificates, showcasing their commitment to delivering high-quality language education. They possess impressive
        language test scores, reflecting their deep understanding of the skills and strategies necessary to excel in
        these exams.
        The collective experience of our team spans several years, during which they have honed their ability to cater
        to diverse learning needs. They excel in identifying students’ individual strengths and weaknesses, ensuring
        personalized teaching approaches that maximize learning outcomes. This unique ability allows them to provide
        targeted guidance and feedback, helping students break through learning barriers and rapidly improve their
        language proficiency.
        Our educators are not just teachers; they are mentors who inspire confidence and enthusiasm in their students.
        They foster a dynamic and interactive learning environment, making the journey of language learning both
        enjoyable and effective. Their teaching methods are continuously evolving, integrating innovative techniques and
        materials to stay abreast of the latest trends in language education.
        The success of our students in achieving their language goals is a testament to our team’s expertise,
        dedication, and teaching excellence. As a unit, they represent the best of language education, committed to
        guiding students toward achieving their highest potential in English proficiency.
      </div>
    </div>
    <div class="con-list padding">
      <div class="con-list1">
        <div class="content-l">
          <div class="content ">
            <div class="title">Michael Z.</div>
            <div class="author">Tutor Supervisor</div>
            <div class="content1">
              As the leading figure of our teaching team, Michael Z. embodies the pinnacle of language instruction. With
              extensive teaching experience that spans over a decade, Mike holds all the credentials of our esteemed
              teachers, including TESOL, Cambridge English Teacher Training Certificates, and other certificates. His
              exceptional language proficiency is reflected in his impressive scores: 115 on TOEFL, 8.5 on IELTS, and a
              perfect 150 on Duolingo English Test.
              Michael teaching philosophy combines the strengths of our diverse team, offering a comprehensive and
              dynamic
              approach to language learning. He is renowned for his ability to deeply understand and address the unique
              needs of each student, fostering a learning environment where students can thrive and surpass their goals.
              His
              classes are a blend of rigorous academic standards and engaging, interactive learning experiences.
              Beyond teaching, Michael is instrumental in developing cutting-edge curriculum and training methods,
              ensuring
              our courses remain at the forefront of language education. His dedication to excellence in teaching and
              his
              commitment to student success make him an invaluable leader and mentor both to our team and our students.
            </div>
          </div>
          <div class="content">
            <div class="title">Albert L.</div>
            <div class="author">Course Designer</div>
            <div class="content1">
              Scoring 8.5 in IELTS, Albert has extensive experience in teaching IELTS, TOEFL, PTE, and DET. His teaching
              is
              known for its relaxed and lively atmosphere, making learning enjoyable. Albert’s approach is tailored to
              each
              student’s needs, enabling rapid improvement in English proficiency in a short period.
              Besides being an excellent teacher, Albert is also a talented course designer who has created and
              developed
              various online and offline courses for English learners of different levels and goals. He has a deep
              understanding of the curriculum standards and assessment criteria of various English tests, and he knows
              how
              to design effective and engaging learning activities and materials that can help students master the test
              skills and strategies. Albert has also collaborated with other teachers and experts to review and improve
              the
              quality and relevance of the courses, and he has received positive feedback and recognition from both
              students
              and peers. Albert is passionate about creating innovative and personalized courses that can cater to the
              diverse needs and interests of English learners.
            </div>
          </div>
        </div>
        <div class="content-l">
          <div class=" content">
            <div class="title">Rita T.</div>
            <div class="author">Senior Tutor</div>
            <div class="content1">
              With 11 years of teaching experience, Rita is a seasoned expert in Duolingo English Test preparation and
              research. She is an ATI-certified advanced English teacher, holding a TESOL Advanced English Teacher
              Certificate and Cambridge English Teacher Training Certificate. Rita has impressive scores of 111 in TOEFL
              and
              140 in DET. Her teaching is marked by an ability to precisely analyze students’ needs and provide targeted
              instruction, helping them break through barriers and enhance their language skills to achieve their
              desired
              scores swiftly.
              In addition, Rita is a passionate and enthusiastic teacher who always motivates and inspires her students
              to
              learn English with confidence and joy. She uses a variety of interactive and engaging methods, such as
              games,
              role-plays, debates, and simulations, to make her classes fun and effective. She also gives personalized
              feedback and guidance to each student, helping them improve their weak areas and overcome their
              challenges.
              Rita’s students love her warm and supportive personality, and they often praise her for being patient,
              friendly, and professional.
            </div>
          </div>

          <div class="content">
            <div class="title">Doris W.</div>
            <div class="author">Tutor</div>
            <div class="content1">
              Doris, scoring 145 in DET and 8.0 in IELTS, is a versatile Duolingo English Test instructor known for her
              rich
              teaching experience. She excels in helping students of various levels quickly overcome difficulties to
              achieve
              their ideal results, having once helped a student improve by 30 points in just two weeks. Her classes are
              known for their lively atmosphere and clear logic, and her teaching style is rigorous yet passionate and
              responsible, making her a favorite among a wide range of students.
            </div>
          </div>
          <div class="content">
            <div class="title">Laura K.</div>
            <div class="author">Test Researcher</div>
            <div class="content1">
              Laura brings years of experience in Duolingo training, 110 in TOEFL, and 155 in DET. A specialist in
              Duolingo
              question research, Laura is adept in teaching adaptive test questions and writing. She has a deep
              understanding of DET exam techniques and trends, excelling in performance analysis to quickly identify and
              enhance students’ potential.
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.aboutus{
  .learn_hader {
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .learn_hader_content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 66px 0 120px;
      .title {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        line-height: 72px;
      }
    }
  }
  .content{
    max-width: 1200px;
    margin: auto;
    margin-top: 100px;
    .title{
      font-weight: 500;
      font-size: 28px;
      color: #201515;
      line-height: 36px;
    }
    .author{
      font-size: 16px;
      color: #201515;
      line-height: 24px;
      margin-top: 8px;
    }
    .content1{
      font-size: 16px;
      color: #201515;
      line-height: 24px;
      margin-top: 24px;
    }
  }
  .con-list{
    background: linear-gradient( 180deg, #FFFFFF 0%, #FFF4F1 100%);
    padding-bottom: 120px !important;
    margin-top: 100px;
    .con-list1{
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .content-l{
        width: calc(50% - 24px);
        padding: 0px 0px;
      }
    }
  }
  .padding{
    padding: 0px 30px;
  }
}
@media (max-width: 800px){
 .aboutus{
  .learn_hader {
    text-align: center;
    background: #fff4f1;
    .learn_hader_content {
      max-width: 100%;
      margin: 0 auto;
      padding: 20px 14px 12px;
      .title {
        font-size: 24px;
          line-height: 30px;
      }
    }
  }
  .content{
    max-width: 100%;
    margin: auto;
    margin-top: 50px;
    .title{
      font-size: 20px;
      line-height: 28px;
    }
    .author{
      font-size: 14px;
      line-height: 18px;
    }
    .content1{
      font-size: 14px;
      line-height: 18px;
      margin-top: 12px;
    }
  }
  .con-list{
    background: linear-gradient( 180deg, #FFFFFF 0%, #FFF4F1 100%);
    padding-bottom: 60px !important;
    margin-top: 50px;
    .con-list1{
      max-width: 100%;
      margin: auto;
      display: block;
      .content-l{
        width: 100%;
        padding: 0px 0px;
      }
    }
  }
  .padding{
    padding: 0px 14px;
  }
}
}
</style>
