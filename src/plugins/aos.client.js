import AOS from 'aos';

export default ({ app }) => {
  new AOS.init({
    // 这里可以设置AOS的各种配置，例如延迟时间、动画持续时间等等
    startEvent: 'load',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
  });
};
