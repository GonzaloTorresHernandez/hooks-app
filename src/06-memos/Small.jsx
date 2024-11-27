

// forma tradicional
import React from "react";

// import { memo } from 'react';
// memo en simples palabras RECUERDA EL COMPONENTE
// este resibe como arg un componente

/**
 * Solo cuando los props del componente cambien se volvera a ejecutar el componente, de lo contrario no recarga el componente
 */

export const Small = React.memo(({value }) => {

    console.log(' me volvi a dibujar ');

    return (
        <>
            <small>{ value }</small>
        </>
    );
})