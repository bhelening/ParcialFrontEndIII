import React from 'react';

function Card({ name, birthYear }) {
  return (
    <div className="card">
      <h2>Hola {name}!</h2>
      <p>Sabemos que naciste en el año: {birthYear}</p>
    </div>
  );
}

export default Card;