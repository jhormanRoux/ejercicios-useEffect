
import React, { useState, useEffect } from 'react';
import './Reloj.css';

const RelojDigital = () => {

      const [hora, sethora] = useState(new Date());

      useEffect(()=>{

         const intervalo =  setInterval(()=>{

            sethora(new Date());
         },1000)

      },[])



  return (
    <div>
       <h3>Reloj Digital</h3>
       <p>{hora.toLocaleTimeString()}</p>
    </div>
  );
}

export default RelojDigital;
