import React, { useState, useEffect } from 'react';


const Contador = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []);

    const seis = Math.floor((count / 100000) % 10);
    const cinco = Math.floor((count / 10000) % 10);
    const cuatro = Math.floor((count / 1000) % 10);
    const tres = Math.floor((count / 100) % 10);
    const dos = Math.floor((count / 10) % 10);
    const uno = count % 10;

    console.log(count);

    return (
        <div className="cajacontador container">
            <div className="siete"><i className="fa-regular fa-clock"></i></div>
            <div className="seis">{seis}</div>
            <div className="cinco">{cinco}</div>
            <div className="cuatro">{cuatro}</div>
            <div className="tres">{tres}</div>
            <div className="dos">{dos}</div>
            <div className="uno">{uno}</div>
        </div>
    );
};

export default Contador;