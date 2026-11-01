const maths = 40;
const english = 10;
const chemistry = 30;

function calculateAverage(maths, english, chemistry) {
  return (maths + english + chemistry) / 3;
}

const average = calculateAverage(maths, english, chemistry);
console.log(average);

function hasPassed(average) {
  if (average >= 50) {
    return true;
  } else {
    return false;
  }
}

console.log(hasPassed(average));

function calculateGrade(average) {
  if (average >= 70) {
    return "Excellent";
  } else if (average >= 50) {
    return "Pass";
  } else {
    return "Failed";
  }
}

console.log(calculateGrade(average));
