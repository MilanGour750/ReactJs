import React, { useState } from 'react';

function BMICalc() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [status, setStatus] = useState('');
  const [BMI, setBMI] = useState(null);

  const calcBMI = () => {
    if (!weight || !height) {
      alert('Please enter both weight and height!');
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);

    let bmiStatus = '';
    if (bmiValue < 18.5) {
      bmiStatus = 'Underweight';
    } else if (bmiValue < 24.9) {
      bmiStatus = 'Normal weight';
    } else if (bmiValue < 29.9) {
      bmiStatus = 'Overweight';
    } else {
      bmiStatus = 'Obesity';
    }
    setStatus(bmiStatus);
  };

  return (
    <>
      <h1 className="text-center text-4xl text-orange-300">BMI Calculator</h1>
      <div className="w-full max-w-xs justify-center items-center mx-auto my-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
              Weight
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              type="number"
              placeholder="Enter Your Weight (in Kgs)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
              Height
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              type="number"
              placeholder="Enter Your Height (in Cms)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
              type="button"
              onClick={calcBMI}
            >
              Find
            </button>
          </div>
        </form>
        {BMI && (
          <div className="text-center">
            <p>Your BMI is: <strong>{BMI}</strong></p>
            <p>Status: <strong>{status}</strong></p>
          </div>
        )}
      </div>
    </>
  );
}

export default BMICalc;
