import React from 'react'
import './LoadingCover.css';
import { iLoadingCover } from '../interfaces/ILoadingCover.interface';

export const LoadingCoverComponent = (props: iLoadingCover) => {

    return (
        <div className='loading_cover_react-background__transparent'>
            {props.text}
        </div>
    )
}
