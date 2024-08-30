import React, { useState, useEffect } from 'react';
import '../../../App.css';
import Gate from '../Images/torii-gate.png';

const Top = () => {
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['cs student @ mcgill', 'software developer I @ intact', 'the next ceo @ google'];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => (prevDelta / 2));
        }
        if (!isDeleting && updateText === fullText) {
            setDelta(period);
            setIsDeleting(true);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(200);
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker)};
    }, [text])

  return (
    <div className="flex flex-col items-center bg-[#FAD4D4] pb-32 pt-16">
        <h1 className="font-sacramento text-8xl text-[#E23E57] font-bold py-8">I'm Thomas</h1>
        <h2 className="font-montserrat text-2xl text-[#E23E57] font-medium pb-8">{text}</h2>
        <img src={Gate} alt="Gate"></img>
    </div>
  );
}

export default Top;