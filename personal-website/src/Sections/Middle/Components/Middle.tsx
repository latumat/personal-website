import React, { useState, useEffect } from 'react';
import '../../../App.css';
import Pfp from '../Images/pfp.png';

const Middle = () => {

  return (
    <div className="flex flex-col items-center py-32 space-y-8 font-montserrat">
        <img src={Pfp} alt='profile picture' className='size-72'></img>
        <div className="flex flex-col items-center space-y-4 text-lg font-medium leading-[2.5rem] md:w-[33rem] text-wrap">
          <div className="text-4xl text-[#E23E57]">
            Hi! I'm Thomas.
          </div>
          <div>
            I am a third-year Computer Science undergraduate at McGill University with experience in MERN full-stack development and Java/Spring Boot.
            My interests span various fields, including FinTech, AI/ML, cybersecurity, and web development.
            If my profile aligns with your needs, feel free to reach out!
          </div>
        </div>
    </div>
  );
}

export default Middle;