document.addEventListener('DOMContentLoaded', () => {
  const rateButton = document.querySelector('.rate');
  const submitButton = document.querySelector('.btn-submit');
  const rateScore = document.getElementById('score');
  const ratingCard = document.querySelector('.rating');
  const thanksCard = document.querySelector('.thanks');

  let selectedRate = null;

  if (!rateButton || !submitButton || !rateScore || !ratingCard || !thanksCard) {
    console.error('Error: Element not found.');
    return;
  }

  rateButton.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-rate')) {
      selectedRate = event.target.textContent;
    }
  });

  submitButton.addEventListener('click', () => {
    if (!selectedRate) {
      alert('Please select a rating first.');
      return;
    }

    ratingCard.classList.remove('isOn');
    rateScore.textContent = selectedRate;
    thanksCard.classList.add('isOn');
  });
});
  