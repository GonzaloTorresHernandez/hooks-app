import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

export const Layout = () => {

    const { counter, incrementa, decrementa,} = useCounter(1);
    const { data, isLoading, hasError } = useFetch( `https://pokeapi.co/api/v2/pokemon/${counter}` );

    console.log(data);

    return (
        <>
            <h1>Informacion de Pokemon</h1>
            <hr />
            { isLoading ? <LoadingMessage/> : <PokemonCard id={data.id} name={ data.name } sprites={ [ data.sprites.front_default, data.sprites.front_shiny] }/>}
            {/* <pre>{ JSON.stringify(data, null, 2) }</pre> */}

            <button className="btn btn-primary mt-2" onClick={() => (counter > 1) ? decrementa() : null}>Anteriores</button>
            <button className="btn btn-success mt-2" onClick={ () => incrementa() }>Siguiente</button>
        </>
    );
}