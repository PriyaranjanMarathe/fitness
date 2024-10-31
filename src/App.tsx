import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('https://nodeapi-dg5e.onrender.com/')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Fitness Tracking App</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
