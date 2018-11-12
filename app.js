// DOM OBJECTS
const currentGradeInput = document.querySelector('#current-grade-input');
const finalExamWeightInput = document.querySelector('#final-exam-weight-input');
const wantedClassGradeInput = document.querySelector('#wanted-class-grade-input');
const calculateBtn = document.querySelector('#calculate-btn');
const calculatedOutputCard = document.querySelector('#calculated-output-card');

// HELPER functions
const allInputsFilledOut = function() {
  return currentGradeInput.value && finalExamWeightInput.value && wantedClassGradeInput.value;
};

// CALCULATION functions
const showNeededScore = function(e) {
  const neededScore = calcNeededScore();
  if(neededScore) {
    calculatedOutputCard.classList.remove('hide');
    calculatedOutputCard.classList.add('show');
    document.querySelector('#calculated-score-header').textContent = neededScore.toFixed(1);
    e.preventDefault();
  }
}

const calcNeededScore = function(e) {
  // return early if inputs not all filled out
  if(!allInputsFilledOut()) {
    calculatedOutputCard.classList.remove('show');
    calculatedOutputCard.classList.add('hide');
    return;
  }
  // calc points so far
  const pointsSoFar = (100-finalExamWeightInput.value)/100*currentGradeInput.value
  // calc points needed to get wanted score
  const pointsNeeded = wantedClassGradeInput.value - pointsSoFar;
  if(pointsNeeded > finalExamWeightInput.value) {
    alert("Sorry, you won't be able to make that grade!");
  }
  else {
    const neededScore = pointsNeeded/finalExamWeightInput.value*100;
    return neededScore;
  }
  e.preventDefault();
}

// EVENT LISTENERS
calculateBtn.addEventListener('click', showNeededScore)