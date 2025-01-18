import React, { useState } from 'react';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const buttonClicked = () => {
    setLoading(true);
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);
        setLoading(false);
      })
      .catch(() => {
        setJoke('Oops! Something went wrong. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl text-orange-600 mb-8">Joke Generator</h1>
      <button
        onClick={buttonClicked}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-300 mb-4"
      >
        {loading ? 'Loading...' : 'Get a Joke'}
      </button>
      <p className="text-xl text-gray-800 text-center mt-4">{joke || 'Click the button to get a joke!'}</p>
    </div>
  );
}

export default App;







