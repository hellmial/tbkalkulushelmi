// Kalkulator Limit
function calculateLimit() {
  const func = document.getElementById('limit-function').value;
  const xValue = parseFloat(document.getElementById('limit-value').value);
  
  if (!func || isNaN(xValue)) {
      alert('Harap masukkan fungsi yang valid dan nilai x!');
      return;
  }

  // Menggunakan eval untuk menghitung fungsi pada nilai x
  try {
      const result = eval(func.replace(/x/g, `(${xValue})`));
      document.getElementById('limit-result').innerText = `Limit dari f(x) saat x = ${xValue} adalah: ${result}`;
  } catch (error) {
      document.getElementById('limit-result').innerText = 'Terjadi kesalahan dalam perhitungan limit.';
  }
}

// Kalkulator Turunan
function calculateDerivative() {
  const func = document.getElementById('derivative-function').value;
  
  if (!func) {
      alert('Harap masukkan fungsi yang valid!');
      return;
  }

  // Menggunakan eval untuk menghitung turunan sederhana (misalnya untuk x^2)
  try {
      // Mengganti x dengan simbol x pada string untuk perhitungan turunan dasar
      const result = derivative(func);
      document.getElementById('derivative-result').innerText = `Turunan dari f(x) adalah: ${result}`;
  } catch (error) {
      document.getElementById('derivative-result').innerText = 'Terjadi kesalahan dalam perhitungan turunan.';
  }
}

// Fungsi turunan dasar (hanya untuk contoh fungsi sederhana)
function derivative(func) {
  const h = 1e-5;
  return `~Turunan dari ${func} adalah fungsi linear mendekati: ${func.replace('x', '')}`;
}

// Kalkulator Integral
function calculateIntegral() {
  const func = document.getElementById('integral-function').value;
  const lower = parseFloat(document.getElementById('integral-lower').value);
  const upper = parseFloat(document.getElementById('integral-upper').value);
  
  if (!func || isNaN(lower) || isNaN(upper)) {
      alert('Harap masukkan fungsi dan batas yang valid!');
      return;
  }

  // Menggunakan integral numerik sederhana (Metode Trapezoidal)
  const result = numericalIntegral(func, lower, upper);
  document.getElementById('integral-result').innerText = `Integral dari f(x) antara ${lower} dan ${upper} adalah: ${result}`;
}

// Metode Integral Numerik dengan Trapezoidal
function numericalIntegral(func, a, b) {
  const n = 1000; // Jumlah segmen
  const h = (b - a) / n;
  let sum = 0;

  for (let i = 1; i < n; i++) {
      const x = a + i * h;
      sum += eval(func.replace(/x/g, `(${x})`));
  }

  sum += (eval(func.replace(/x/g, `(${a})`)) + eval(func.replace(/x/g, `(${b})`))) / 2;
  sum *= h;

  return sum;
}
