const arrFeedback = document.querySelectorAll('.feedback-item');
const btnFeedback = document.querySelector('.btn-feedback');

btnFeedback.addEventListener('click', () => {
  arrFeedback.forEach((item) => item.classList.toggle('feedback-shift'));
})

