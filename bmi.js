function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (!weight || !height) {
    alert('Please enter valid weight and height');
    return;
  }

  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  const resultDiv = document.getElementById('result');

  let category = '';
  let color = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    color = '#ffcc70';
  } else if (bmi < 24.9) {
    category = 'Normal weight';
    color = '#6c63ff';
  } else if (bmi < 29.9) {
    category = 'Overweight';
    color = '#ff7f50';
  } else {
    category = 'Obese';
    color = '#ff5e5e';
  }

  resultDiv.textContent = `BMI: ${bmi.toFixed(1)} — ${category}`;
  resultDiv.style.backgroundColor = color;
  resultDiv.style.color = '#fff';
}
