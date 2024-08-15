import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');
    setShowCard(false);

    // Validación del nombre
    if (name.trim().length < 2) {
      setError('Por favor ingresa tu nombre completo.');
      return;
    }
    if (/\d/.test(name)) {
      setError('El nombre no puede contener números.');
      return;
    }

    // Validación del año de nacimiento
    if (!/^\d{4}$/.test(birthYear)) {
      setError('Por favor ingresa un año de nacimiento válido.');
      return;
    }

    const year = parseInt(birthYear, 10);
    const minYear = 1925; // Año mínimo permitido

    if (year > 2024) {
      setError('El año ingresado no puede ser mayor a 2024, no estamos en el futuro.');
      return;
    }

    if (year === 2024) {
      setError('El año 2024 no es válido. ¡Un bebé no estaría llenando este formulario!');
      return;
    }

    if (year < minYear) {
      setError('No puedes tener mas de 99 años.');
      return;
    }

    // Mostrar Card si las validaciones son exitosas
    setShowCard(true);
  };

  return (
    <div className='App'>
      <h1>Ingresa tus datos</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type='text'
          placeholder='Ingresa tu nombre'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Ingresa tu año de nacimiento'
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        />
        <button type='submit'>ENVIAR</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {showCard && <Card name={name} birthYear={birthYear} />}
    </div>
  );
}

export default App;