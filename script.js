document.addEventListener('DOMContentLoaded', () => {
  const rateRadios = document.getElementsByName('rate');
  const submitButton = document.querySelector('.btn-submit');
  const rateScore = document.getElementById('score');
  const ratingCard = document.querySelector('.rating');
  const thanksCard = document.querySelector('.thanks');

  let selectedRate = null;

  if (!rateRadios || !submitButton || !rateScore || !ratingCard || !thanksCard) {
    console.error('Error: Element not found.');
    return;
  }

  function getSelectedValue() {
    for (var i = 0; i < rateRadios.length; i++) {
      if (rateRadios[i].checked) {
        selectedRate = rateRadios[i].value;
        break;
      }
    }
  }

  submitButton.addEventListener('click', () => {
    getSelectedValue();
    if (!selectedRate) {
      alert('Please select a rating first.');
      return;
    }

    ratingCard.classList.remove('isOn');
    rateScore.textContent = selectedRate;
    thanksCard.classList.add('isOn');
  });
});
  

