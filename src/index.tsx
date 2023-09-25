import React from 'react';
import { useLoadingCoverState } from './hooks/useLoadingCoverState';
import { iLoadingCover } from './interfaces/ILoadingCover.interface';



export const LoadingCover = ({ color }: iLoadingCover) => {

    const { isLoading, showLoadingCover, hideLoadingCover } = useLoadingCoverState();

    return (
    <div>
        {isLoading ? (<p>Loading</p>) : (<p>No loading</p>)}
        <br />

        <button onClick={showLoadingCover} >Mostrar</button>
        <button onClick={hideLoadingCover} >Ocultar</button>

    </div>)
}
