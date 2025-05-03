document.getElementById('predictForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Collect input data
    const data = {
      pregnancies: parseInt(document.getElementById('pregnancies').value),
      glucose: parseInt(document.getElementById('glucose').value),
      bloodPressure: parseInt(document.getElementById('bloodPressure').value),
      skinThickness: parseInt(document.getElementById('skinThickness').value),
      insulin: parseInt(document.getElementById('insulin').value),
      bmi: parseFloat(document.getElementById('bmi').value),
      dpf: parseFloat(document.getElementById('dpf').value),
      age: parseInt(document.getElementById('age').value),
    };
  
    // Placeholder for prediction logic
    const prediction = mockPredict(data);
    document.getElementById('result').innerText = `Prediction: ${prediction}`;
  });
  
  // Simulated ML logic (for demo only)
  function mockPredict(data) {
    if (data.glucose > 125 || data.bmi > 30) {
      return 'High risk of diabetes';
    } else {
      return 'Low risk of diabetes';
    }
  }
  