import React, { useEffect, useState } from 'react';

const Contador = () => {

    let [button, setButton] = useState(0); 
    let [date, setDate] = useState("");
    

    let counter = () => {
      setButton(button + 1);
      setDate(new Date().toLocaleString());
       
    };
//Montaje
    useEffect(() => {
        console.log("Prueba de ejecucion del montaje useEffect")
    }, []);

//Actualizacion

useEffect(() => {
console.log("texto por cada actualizacion y primer montaje")
},[button]);

  return (
    <div><button onClick={counter}>Haceme click</button>
    <p>Click numero {button}</p>
    <p>Ultimo click a las {date}</p>
    
    </div>
    
  )
  }

export default Contador
