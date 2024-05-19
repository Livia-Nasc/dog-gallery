import React, { useEffect, useState } from 'react';
import { fetchDogs } from './api';
import { Dog } from './types';
import './App.css';

const App: React.FC = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getDogs = async () => {
      try {
        const catData = await fetchDogs();
        setDogs(catData);
      } catch (error) {
        console.error('Error fetching dog data:', error);
      } finally {
        setLoading(false);
      }
    };

    getDogs();
  }, []);
  const handleClick = () => {
    window.location.href = 'http://cat-gallery-six.vercel.app';
  };


  if (loading) {
    return <div id='loading'>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Dog Gallery</h1>
      <div className="dog-gallery">
        {dogs.map(dog => (
          <div key={dog.id} className="dog-item">
            <img src={dog.url} alt={`Dog ${dog.id}`} width={dog.width} height={dog.height} />
          </div>
        ))}
      </div>
      <button onClick={handleClick} type='button'>Go to cat gallery</button>
    </div>
  );
};

export default App;
