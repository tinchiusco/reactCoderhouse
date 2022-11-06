import React, { useEffect, useState } from 'react';
import "./styles.css"

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

/* const itemCant = () => {
    let [buttonAddDel, setButtonAdd] = useState(0); */
    




  return (
    <div><button onClick={counter}>Haceme click</button>
    <p>Click numero {button}</p>
    <p>Ultimo click a las {date}</p>
    <div className='buttonCont'>
        <button className='buttonDel' onClick={0}>
            -
        </button>
        <p className='para'>
        0
        </p>
        <button className='buttonAdd'>
            +
        </button>
    </div>
    
    </div>
    
  )}
  

export default Contador
