import { fetchmy } from '@/utils/request';
import { api, domain } from '@/utils';

export const sesCodeSend = (args: any) =>
  fetchmy(`${api}/common/sesCode`, {
    method: 'post',
    body: JSON.stringify(args),
  });

export const sesCodeVerify = (args: any) =>
  fetchmy(`${api}/common/sesCodeVerify`, {
    method: 'post',
    body: JSON.stringify(args),
  });

export const stripePayUrlGet = (args: any, token: string) =>
  fetchmy(`${api}/stripe/payUrl?vipId=${args.vipId}`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const stripePayStatusGet = (logVipId: string, token: string) =>
  fetchmy(`${api}/stripe/status?logVipId=${logVipId}`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const getVipdataWithToken = (token: string) =>
  fetchmy(`${api}/vips`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const getVipdataNoToken = () =>
  fetchmy(`${api}/common/vips`, {
    method: 'get',
  });

export const findPassword = (args: any) =>
  fetchmy(`${api}/common/findPassword`, {
    method: 'post',
    body: JSON.stringify(args),
  });

export const logout = async () => {
  const token = await getToken(false);
  return fetchmy(`${api}/logout`, {
    method: 'post',
    body: JSON.stringify({ domain }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const register = (args: any) =>
  fetchmy(`${api}/common/register`, {
    method: 'post',
    body: JSON.stringify(args),
  });

export const portalData = [
  [
    {
      id: 34,
      type: '1',
      data: '{"avatar":"/20240429/f6a83a592711b59a1bec40ed8084963d.jpg","nickname":"Priska Rani Wahyohana","rate":"5","country":"Indonesia","content":"I\'ve been using this DET practice platform for a few weeks now, and I\'m thoroughly impressed with the quality of the practice questions. They cover a wide range of topics and difficulty levels, which has really helped me strengthen my skills."}',
      order: 1,
      createTime: '2024-04-15T01:29:01.000Z',
    },
    {
      id: 35,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocIWxED3dn82WHd4rgZFpWL2hrUXyq7C9MdBkAL8YPQBnhSkeA=s96-c","nickname":"kamala Neupane","rate":"5.0","country":"Nepal","content":"The writing correction service provided by this Duolingo test platform is exceptional. The feedback I receive is detailed and constructive, helping me pinpoint my weaknesses and improve my performance. Highly recommend!"}',
      order: 2,
      createTime: '2024-04-15T01:29:01.000Z',
    },
    {
      id: 36,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocJ_xo8AK0XdH_L0xqUj4RNhNJOk4Rd_9FIsm8TRUH56=s96-c","nickname":"Ganat Saad","rate":"5.0","country":"Egypt","content":"As someone preparing for the Duolingo English test, I appreciate having access to model exams on this platform. It\'s a great way to gauge my readiness and identify areas where I need to focus more attention. The detail of the mock report is also a plus."}',
      order: 3,
      createTime: '2024-04-15T01:29:01.000Z',
    },
    {
      id: 37,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocJVN2MG9si9tp4kl5HB7wekXX7uhkTRGbEp-pIVWWPI=s96-c","nickname":"Vishal Heer","rate":"4.8","country":"India","content":"I enrolled in the speaking and writing courses offered on this platform, and I couldn\'t be happier with my decision. The course material is comprehensive and well-structured. Definitely worth the investment."}',
      order: 4,
      createTime: '2024-04-15T01:29:01.000Z',
    },
    {
      id: 38,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocLCPP--Vj0dyeydEB8DbBCvwPbrQIR_ekbIPJRfb8CPO7kC-A=s96-c","nickname":"Baemon Hardcore","rate":"5.0","country":"Great Britain (United Kingdom; England)","content":"The customer service provided by this platform is top-notch. Whenever I\'ve had a question or encountered an issue, the support team has been quick to respond and resolve it. It\'s reassuring to know that help is just a message away."}',
      order: 5,
      createTime: '2024-04-15T01:29:01.000Z',
    },
    {
      id: 39,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocJoOf56lMxO3X7CO71CzjPVOdeSbpD7yHHgztkdqjGh=s96-c","nickname":"Fathy Gad","rate":"5","country":"Egypt","content":"Overall, I\'m extremely satisfied with my experience using this Duolingo English test preparation platform. It has equipped me with the skills and confidence I need to ace the exam, and I would highly recommend it to anyone serious about achieving their target score."}',
      order: 6,
      createTime: '2024-04-15T01:29:01.000Z',
    },
    {
      id: 40,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocLspmJ1zJDz8mo-BD6CGF7Ki4pOe-YRa4LF4JpirgG_=s96-c","nickname":"Christian kitata","rate":"5","country":"Ethiopia","content":"I couldn\'t be happier with the Duolingo English test preparation service provided by this platform. The practice questions are comprehensive and closely resemble the actual exam, helping me feel confident and well-prepared."}',
      order: 7,
      createTime: '2024-04-15T01:29:02.000Z',
    },
    {
      id: 41,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocJNkuDE7TO0MR10f_zx31AfJGUEpyLJz0pblAeMfZyrEA=s96-c","nickname":"Nhu Quynh Tran","rate":"5.0","country":"Vietnam","content":"The mock exams provided by this platform are spot-on!  They accurately simulate the format and difficulty level of the Duolingo English test, allowing me to gauge my progress and focus on areas that need improvement."}',
      order: 8,
      createTime: '2024-04-15T01:29:02.000Z',
    },
    {
      id: 42,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocL33C-5aCGgXGv2Edt2ocbIakoiJJ_QWNc2DHKLWxLa=s96-c","nickname":"saikat Hossain","rate":"5.0","country":"Bangladesh","content":"The content of the test preparation materials is top-notch.  I appreciate the platform\'s attention to detail in covering all aspects of the duolingo test.It\'s evident that they understand the test requirements well."}',
      order: 9,
      createTime: '2024-04-15T01:29:02.000Z',
    },
    {
      id: 43,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocJtTyV2N3gOTbx8Ycd6y88Now_ln8VBdef8CuwRl17-OwU=s96-c","nickname":"SaintZ","rate":"5.0","country":"Indonesia","content":"The service provided by this platform is exceptional. I encountered a technical issue while accessing my practice questions, and their customer support team resolved it promptly. Their responsiveness and professionalism are commendable."}',
      order: 10,
      createTime: '2024-04-15T01:29:02.000Z',
    },
    {
      id: 44,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocLg2IhTVOFINuBqlz7lKePDbyicVQDIzuJ8gHxIIy0hQszqg9p1=s96-c","nickname":"SWIMYEH.","rate":"5.0","country":"Iraq","content":"The intelligent customized learning plans offered by this platform have been a game-changer for me. Instead of following a one-size-fits-all study schedule, I appreciate how the platform tailors my learning experience based on my strengths and weaknesses. It\'s a truly adaptive and efficient way to prepare for the Duolingo test."}',
      order: 11,
      createTime: '2024-04-15T01:29:02.000Z',
    },
    {
      id: 45,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocLSdUzUH1IVoWxKV3fX2lULSf8Df_tP_4Xg6DNpqS0P=s96-c","nickname":"han c","rate":"5.0","country":"Singapore","content":"I love how the platform\'s intelligent plans adapt to my progress in real time. If I excel in certain areas, the system adjusts my study plan accordingly to challenge me further. It\'s a dynamic and efficient approach to DET preparation that keeps me motivated and engaged."}',
      order: 12,
      createTime: '2024-04-15T01:29:02.000Z',
    },
    {
      id: 46,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocI6lwsdU9AtHXhqtN5pcyTmz_vnJ387_fTeuTZH8dDh=s96-c","nickname":"原健太","rate":"4.8","country":"Japan","content":"The mock exams accurately mirrored the format and difficulty level of the actual Duolingo English test. Practicing with these exams gave me a good idea of what to expect on test day."}',
      order: 13,
      createTime: '2024-04-15T01:29:02.000Z',
    },
    {
      id: 47,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocLabbqvRURMmLrQn5XkXc0jTKhVzdsxDLTI7CA-iUM4tMM2v6w=s96-c","nickname":"Hastaa khadkaa","rate":"4.5","country":"Nepal","content":"Navigating the platform was a breeze thanks to its intuitive interface. I appreciated how easy it was to access the different features and resources."}',
      order: 14,
      createTime: '2024-04-15T01:29:02.000Z',
    },
    {
      id: 48,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a-/ALV-UjUoYuyZx_3KcYKuA-MkTj0PknMHmqCGjoIWWfV0p1sBrbIMoiA3c5MLHQ2AevC8yFjy74DjG3j-ZLNe6iElgzSUKgqE_7BCuFH4otcpBAmCPVQnIcf8_yWbPh1_ayBGMsXzT9TOGMzXQiHlBQEmrwZcDpS1jqNHpzSVO1Yb9DR-uhxULYw9pkfydnKp2HNMbkioythnwuDYQBkKmVRhm28UUXp4lxItxjXH49C9vdnrJlDD9juIgBaR2PrQTu_lWH4yCQ4YZmEAzDZaz4Ra2S-wJqWM-2ZQik0UqSky9V7mQM9Z1mlXHnbRHhtiOoKQe8Y8ekJJRXCBHONP25mQvRjne4RfONHFYC3bC7MS6fVY-NoMchDnZh_fGQx8m-Us7_7Zl4-YUGbq3tw9tq5ZXekcciOUIxxArYmAfza6MZTUjuqQ_0Ef9OIO8aYWd71XPFQBoZAbcUKzA1LUblP4IzIlUieD49iM-MemyGyqZtaYJD-j_U-LdOROVyA_N_hrJ3rBI5otQIjr_oKbON0dt33FjnSYbEy0_FjKQ02MNnsdlspY3IldP7RktDMr3LUG2XEM2xzjjAvAMSND_Frpp2Aijvf7l6QfKMbVa3VwOksA_FIPZzKxgD3gU9OwZfhrYMl5dj5O4Ic8ggUeClunudMSfTqa6q6RdsM4Av5PcMOL9GmYMPvgDWFkQ-V8WNIvNHo2pwjefwa3EzydG4p1Dw4go6pK2p4atz754L7XZjd3ve5GtMDroMaol1gii9w7kiAtE3ODIxogtPjptDFQyfd1GoAxOXnDT3eXb9QmAPj_p8lT4ZOExzAud2JdEcz-UobbSmQQiPIKPAA_0yZH4NOaJPoODIaTtMKYO_jZ0sHO-Al2o-APmqaYZ-l2NVN6YORVuraRkgXjdHS5p5IjKtF-vMP2LJ-9oIqEcssfhm8Ge-BvnFuTJ6h8ula654uDNRefSI_cATCw9gIhS632=s96-c","nickname":"Nguyệt Tư","rate":"4.9","country":"United States of America (USA)","content":"I found the content on this platform to be diverse and comprehensive. From test question practice to speaking and writing correction services, there\'s something for every aspect of the Duolingo English Test."}',
      order: 15,
      createTime: '2024-04-15T01:29:02.000Z',
    },
    {
      id: 49,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocKaYOvMKG2PmjTwQvotier3SfdPp6uBxdzR7eSZ5YZGuYUSp1gCgw=s96-c","nickname":"snigdha agarwal","rate":"5.0","country":"India","content":"I highly recommend this platform to anyone preparing for the Duolingo English test. It offers a comprehensive suite of resources and services that are sure to enhance your preparation and boost your confidence on test day."}',
      order: 16,
      createTime: '2024-04-15T01:29:02.000Z',
    },
    {
      id: 50,
      type: '1',
      data: '{"avatar":"https://lh3.googleusercontent.com/a/ACg8ocKwNI3RmGqm62IQW42rOdN3UNick_Bq_U5Y3p3bJVJpYZvA6Ng=s96-c","nickname":"Christian Andres Quintero Molano","rate":"4.5","country":"Colombia","content":"Considering the wide range of services and resources on offer, this Duolingo practice platform is worth every penny. Investing in this prep service was definitely worth it to me. "}',
      order: 17,
      createTime: '2024-04-15T01:29:02.000Z',
    },
    {
      id: 51,
      type: '1',
      data: '{"avatar":"/20240429/fc3bb17c37d864d1ab167ca216664c24.jpg","nickname":"Michael Mamdouh","rate":"5.0","country":"Egypt","content":"I recently used DETPractice to prepare for my upcoming Duolingo English test and I must say, it exceeded my expectations. The platform provides test practice, speaking and writing correction services, mock exams, speaking and writing courses, etc. The resources are really comprehensive."}',
      order: 18,
      createTime: '2024-04-15T01:29:03.000Z',
    },
  ],
] as any;

export const platformData = {
  userTotal: '400k+', // 用户
  questionTotal: '18000+', // 题库
  examTotal: '10k+', // 模考人次
  correctTotal: '21k+', // 批改人次
  speakingTotal: '26k+', // 批改人次
} as any;
