const arrFeedback = document.querySelectorAll('.feedback-item');
const btnFeedback = document.querySelector('.btn-feedback');

btnFeedback.addEventListener('click', () => {
  arrFeedback.forEach((item) => item.classList.toggle('feedback-shift'));
})

const arrFaq = Array.from(document.querySelectorAll('.question'));

arrFaq.forEach(elem => {
  const span = elem.querySelector('span');
  span.addEventListener('click', () => {
    elem.classList.toggle('active-q');
  })
})

