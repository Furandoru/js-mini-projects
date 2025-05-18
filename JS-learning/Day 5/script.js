const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const faq = question.parentElement;
    faq.classList.toggle('active');
  });
});
