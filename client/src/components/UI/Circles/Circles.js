import React from 'react'
import Circle from '../Circle/Circle';

 const Circles = () => {
    return (
      <div>
        <Circle top="-2%" right="1%" size="3rem" color="#3654d1" />
        <Circle top="2%" left="10%" size="5rem" color="#bdc7ed" />
        <Circle bottom="50%" left="-2%" size="4rem" color="#3654d1" />
        <Circle bottom="23%" right="2%" size="1rem" color="#3654d1" />
      </div>
    );
}

export default Circles;
