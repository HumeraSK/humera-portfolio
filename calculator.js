const display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    alert('Invalid Expression');
  }
}

// Temperature Conversion
function convertCtoF() {
  const c = parseFloat(document.getElementById('celsius').value);
  if(isNaN(c)) return alert('Enter Celsius value');
  const f = (c * 9/5) + 32;
  document.getElementById('tempResult').textContent = `${c}°C = ${f.toFixed(2)}°F`;
}

function convertFtoC() {
  const f = parseFloat(document.getElementById('fahrenheit').value);
  if(isNaN(f)) return alert('Enter Fahrenheit value');
  const c = (f - 32) * 5/9;
  document.getElementById('tempResult').textContent = `${f}°F = ${c.toFixed(2)}°C`;
}
