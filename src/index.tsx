import React from 'react';
import { useLoadingCover } from './hooks/useLoadingCoverState';
//import { iLoadingCover } from './interfaces/ILoadingCover.interface';
import { LoadingCoverComponent } from './components/LoadingCover';
import { iLoadingCover } from './interfaces/ILoadingCover.interface';



export const LoadingCover = (props: iLoadingCover) => {
    const { isLoading } = useLoadingCover();
    return (
        <div>
            {isLoading ? (<LoadingCoverComponent {...props} />) : (null)}
        </div>)
}
