import React from 'react';

//Mostrara todo lo que llegue del Router
//En este caso llega el componente SongList
export default ({children}) => {
    return <div className="container">{children}</div>
};