import React, { useState } from "react";
import "./styles.css";

const ItemListContainer = ({greeting}) => {

    const [genero, setGenero] = useState("Arcade");

    const changeGenero = () => {
        let conditional = genero === "Arcade" ? setGenero("Indie"): setGenero("Arcade");
        return conditional
    };
    return(
        <div className="itemListContainer">
            <h2>
                {greeting}
            </h2>
            <p>{genero}</p>
            <button onClick={changeGenero}>Cambiar genero</button>
        </div>

    )
}

export default ItemListContainer;