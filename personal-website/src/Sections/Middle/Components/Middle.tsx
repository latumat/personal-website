import React, { useState, useEffect } from 'react';
import '../../../App.css';
import Pfp from '../Images/pfp.png';

const Middle = () => {

  return (
    <div className="flex flex-col items-center py-32">
        <img src={Pfp} alt='profile picture' className='size-72'></img>
    </div>
  );
}

export default Middle;