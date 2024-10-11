export default defineNuxtPlugin(() => {
  setTimeout(function () {
    const d = document;
    const s = d.createElement('script');

    s.src = 'https://code.tidio.co/wruqp7llixvkwsdlbkcqpid2jhxwl0cx.js';
    document.body.appendChild(s);
  }, 1000);
});
