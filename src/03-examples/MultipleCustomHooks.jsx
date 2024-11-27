import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

    const { counter, incrementa, decrementa,} = useCounter(1);
    const { data, isLoading, hasError } = useFetch( `https://pokeapi.co/api/v2/pokemon/${counter}` );

    return (
        <>
            <h1>Informacion de Pokemon</h1>
            <hr />
            { isLoading ? <LoadingMessage/> : <PokemonCard id={data.id} name={ data.name } sprites={ [ data.sprites.front_default, data.sprites.front_shiny] }/>}
            {/* <pre>{ JSON.stringify(data, null, 2) }</pre> */}

            <button className="btn btn-primary mt-2" name="btn-anterior" onClick={() => (counter > 1) ? decrementa() : null}>Anteriores</button>
            <button className="btn btn-success mt-2" name="btn-siguiente" onClick={ () => incrementa() }>Siguiente</button>
        </>
    );
}