import React, { useState, useEffect } from "react";

const Count = () => {

  const [sumar,setSumar] = useState(0)

   const contador = ()=> {

    setSumar(sumar + 1 );
   }
  return (
    <div>
      
     <h3>{sumar}</h3>
     <button onClick={contador}>Click para sumar </button> 
    
    </div>
  )
}

export default Count
