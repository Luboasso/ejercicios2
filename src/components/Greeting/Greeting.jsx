import React, { useState, useEffect } from 'react';

const Greeting = ({ name }) => {
  const [greeting, setGreeting] = useState(`Hola ${name}`);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGreeting('Hola Alfonsina');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []); 

  return (
    <div>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
 